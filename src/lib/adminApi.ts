import type { LabEvent } from "@/lib/events";

const API_BASE = (import.meta.env.VITE_ADMIN_API_URL || "").replace(/\/$/, "");
const TOKEN_KEY = "ishconnect.admin.token";

type ApiError = { error?: string };

async function request<T>(path: string, init: RequestInit = {}, authenticated = false): Promise<T> {
  const token = sessionStorage.getItem(TOKEN_KEY);
  const response = await fetch(`${API_BASE}/api${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(authenticated && token ? { Authorization: `Bearer ${token}` } : {}),
      ...init.headers,
    },
  });
  const body = (await response.json().catch(() => ({}))) as ApiError & T;
  if (!response.ok) {
    if (response.status === 401 && authenticated) sessionStorage.removeItem(TOKEN_KEY);
    throw new Error(body.error || "The request could not be completed.");
  }
  return body;
}

export async function adminLogin(email: string, password: string): Promise<void> {
  const result = await request<{ token: string }>("/admin/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  sessionStorage.setItem(TOKEN_KEY, result.token);
}

export async function changeAdminCredentials(currentPassword: string, email: string, newPassword: string): Promise<void> {
  const result = await request<{ token: string }>("/admin/credentials", {
    method: "PUT",
    body: JSON.stringify({ currentPassword, email, newPassword }),
  }, true);
  sessionStorage.setItem(TOKEN_KEY, result.token);
}

export async function getAdminEvents(): Promise<LabEvent[]> {
  const result = await request<{ items: Array<LabEvent & { _id?: string }> }>("/admin/events", {}, true);
  return result.items.map(({ _id, ...event }) => ({ ...event, id: event.id || _id || "" }));
}

export async function saveAdminEvent(event: LabEvent, isNew: boolean): Promise<void> {
  const { id, ...payload } = event;
  await request(isNew ? "/admin/events" : `/admin/events/${encodeURIComponent(id)}`, {
    method: isNew ? "POST" : "PATCH",
    body: JSON.stringify(payload),
  }, true);
}

export async function deleteAdminEvent(id: string): Promise<void> {
  await request(`/admin/events/${encodeURIComponent(id)}`, { method: "DELETE" }, true);
}

export function adminLogout(): void {
  sessionStorage.removeItem(TOKEN_KEY);
}

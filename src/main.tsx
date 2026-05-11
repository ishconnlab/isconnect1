import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { App } from "./App";

import "./styles.css";

window.addEventListener("unhandledrejection", (event) => {
  if (
    event.reason?.message?.includes("Failed to fetch dynamically imported module") ||
    event.reason?.message?.includes("Importing a module script failed") ||
    event.reason?.message?.includes("Loading chunk")
  ) {
    event.preventDefault();
    if (!sessionStorage.getItem("opencode_chunk_reload")) {
      sessionStorage.setItem("opencode_chunk_reload", "true");
      window.location.reload();
    }
  }
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);

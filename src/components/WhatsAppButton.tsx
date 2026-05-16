import { MessageCircle } from "lucide-react";

const PHONE = "250787377750";
const TEXT = "Hello IshConnect! I'd like to discuss a project.";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(TEXT)}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

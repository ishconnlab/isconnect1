import { useEffect } from "react";
import { SEOHead } from "@/components/SEOHead";
import { useEventsStore } from "@/lib/events";

export function Admin() {
  const openEditor = useEventsStore((state) => state.openEditor);
  const closeEditor = useEventsStore((state) => state.closeEditor);

  useEffect(() => {
    openEditor();
    return closeEditor;
  }, [closeEditor, openEditor]);

  return (
    <>
      <SEOHead
        title="Admin Login · IshConnect"
        description="Sign in to the IshConnect admin editor."
        canonical="/admin"
        noindex
      />
      <div className="flex min-h-[50vh] items-center justify-center pt-28 text-sm text-muted-foreground">
        Opening admin login…
      </div>
    </>
  );
}

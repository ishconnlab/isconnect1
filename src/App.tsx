import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { SEOHead } from "@/components/SEOHead";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/JsonLd";
import { PAGE_SEO } from "@/lib/seo";
import { RootLayout } from "@/routes/__root";
import { Loader2 } from "lucide-react";

const Home = lazy(() => import("@/routes/index").then((m) => ({ default: m.Home })));
const About = lazy(() => import("@/routes/about").then((m) => ({ default: m.About })));
const Academy = lazy(() => import("@/routes/academy").then((m) => ({ default: m.Academy })));
const Contact = lazy(() => import("@/routes/contact").then((m) => ({ default: m.Contact })));
const Solutions = lazy(() => import("@/routes/solutions").then((m) => ({ default: m.Solutions })));
const Work = lazy(() => import("@/routes/work").then((m) => ({ default: m.Work })));
const Privacy = lazy(() => import("@/routes/privacy").then((m) => ({ default: m.Privacy })));

const defaults = PAGE_SEO.home;

function LoadingFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
    </div>
  );
}

function NotFound() {
  return (
    <>
      <SEOHead
        title="Page Not Found · IshConnect"
        description="The page you're looking for doesn't exist or has been moved. Return to IshConnect home."
        canonical="https://www.ishconnect.rw/404"
        noindex
      />
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold text-foreground">404</h1>
          <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-6">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Go home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export function App() {
  return (
    <ErrorBoundary>
      <SEOHead {...defaults} />
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="academy" element={<Academy />} />
            <Route path="contact" element={<Contact />} />
            <Route path="solutions" element={<Solutions />} />
            <Route path="work" element={<Work />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

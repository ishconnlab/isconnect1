import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { OrganizationJsonLd, WebSiteJsonLd, LocalBusinessJsonLd } from "@/components/JsonLd";
import { RootLayout } from "@/routes/__root";
import { NotFound } from "@/routes/not-found";
import { Loader2 } from "lucide-react";

const Home = lazy(() => import("@/routes/index").then((m) => ({ default: m.Home })));
const About = lazy(() => import("@/routes/about").then((m) => ({ default: m.About })));
const Academy = lazy(() => import("@/routes/academy").then((m) => ({ default: m.Academy })));
const Contact = lazy(() => import("@/routes/contact").then((m) => ({ default: m.Contact })));
const Solutions = lazy(() => import("@/routes/solutions").then((m) => ({ default: m.Solutions })));
const Work = lazy(() => import("@/routes/work").then((m) => ({ default: m.Work })));
const ProjectCaseStudy = lazy(() =>
  import("@/routes/project").then((m) => ({ default: m.ProjectCaseStudy })),
);
const Privacy = lazy(() => import("@/routes/privacy").then((m) => ({ default: m.Privacy })));

function LoadingFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
    </div>
  );
}

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<RootLayout />}>
          <Route index element={
            <motion.div {...pageTransition}><Home /></motion.div>
          } />
          <Route path="about" element={
            <motion.div {...pageTransition}><About /></motion.div>
          } />
          <Route path="academy" element={
            <motion.div {...pageTransition}><Academy /></motion.div>
          } />
          <Route path="contact" element={
            <motion.div {...pageTransition}><Contact /></motion.div>
          } />
          <Route path="solutions" element={
            <motion.div {...pageTransition}><Solutions /></motion.div>
          } />
          <Route path="work" element={
            <motion.div {...pageTransition}><Work /></motion.div>
          } />
          <Route path="work/:slug" element={
            <motion.div {...pageTransition}><ProjectCaseStudy /></motion.div>
          } />
          <Route path="privacy" element={
            <motion.div {...pageTransition}><Privacy /></motion.div>
          } />
          <Route path="*" element={
            <motion.div {...pageTransition}><NotFound /></motion.div>
          } />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export function App() {
  return (
    <ErrorBoundary>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <LocalBusinessJsonLd />
      <Suspense fallback={<LoadingFallback />}>
        <AnimatedRoutes />
      </Suspense>
    </ErrorBoundary>
  );
}

import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { usePageTracking } from "@/hooks/usePageTracking";
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
const SoftwareDevelopment = lazy(() =>
  import("@/routes/services/software-development").then((m) => ({
    default: m.SoftwareDevelopment,
  })),
);
const WebDevelopment = lazy(() =>
  import("@/routes/services/web-development").then((m) => ({ default: m.WebDevelopment })),
);
const MobileApps = lazy(() =>
  import("@/routes/services/mobile-apps").then((m) => ({ default: m.MobileApps })),
);
const AiSolutions = lazy(() =>
  import("@/routes/services/ai-solutions").then((m) => ({ default: m.AiSolutions })),
);
const Cybersecurity = lazy(() =>
  import("@/routes/services/cybersecurity").then((m) => ({ default: m.Cybersecurity })),
);
const CloudServices = lazy(() =>
  import("@/routes/services/cloud").then((m) => ({ default: m.CloudServices })),
);
const TechTraining = lazy(() =>
  import("@/routes/services/tech-training").then((m) => ({ default: m.TechTraining })),
);
const Challenges = lazy(() =>
  import("@/routes/challenges").then((m) => ({ default: m.Challenges })),
);

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
  usePageTracking();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<RootLayout />}>
          <Route
            index
            element={
              <motion.div {...pageTransition}>
                <Home />
              </motion.div>
            }
          />
          <Route
            path="about"
            element={
              <motion.div {...pageTransition}>
                <About />
              </motion.div>
            }
          />
          <Route
            path="academy"
            element={
              <motion.div {...pageTransition}>
                <Academy />
              </motion.div>
            }
          />
          <Route
            path="challenges"
            element={
              <motion.div {...pageTransition}>
                <Challenges />
              </motion.div>
            }
          />
          <Route
            path="contact"
            element={
              <motion.div {...pageTransition}>
                <Contact />
              </motion.div>
            }
          />
          <Route
            path="solutions"
            element={
              <motion.div {...pageTransition}>
                <Solutions />
              </motion.div>
            }
          />
          <Route
            path="work"
            element={
              <motion.div {...pageTransition}>
                <Work />
              </motion.div>
            }
          />
          <Route
            path="work/:slug"
            element={
              <motion.div {...pageTransition}>
                <ProjectCaseStudy />
              </motion.div>
            }
          />
          <Route
            path="software-development-rwanda"
            element={
              <motion.div {...pageTransition}>
                <SoftwareDevelopment />
              </motion.div>
            }
          />
          <Route
            path="web-development-kigali"
            element={
              <motion.div {...pageTransition}>
                <WebDevelopment />
              </motion.div>
            }
          />
          <Route
            path="mobile-app-development-rwanda"
            element={
              <motion.div {...pageTransition}>
                <MobileApps />
              </motion.div>
            }
          />
          <Route
            path="ai-solutions-rwanda"
            element={
              <motion.div {...pageTransition}>
                <AiSolutions />
              </motion.div>
            }
          />
          <Route
            path="cybersecurity-rwanda"
            element={
              <motion.div {...pageTransition}>
                <Cybersecurity />
              </motion.div>
            }
          />
          <Route
            path="cloud-services-rwanda"
            element={
              <motion.div {...pageTransition}>
                <CloudServices />
              </motion.div>
            }
          />
          <Route
            path="tech-training-rwanda"
            element={
              <motion.div {...pageTransition}>
                <TechTraining />
              </motion.div>
            }
          />
          <Route
            path="privacy"
            element={
              <motion.div {...pageTransition}>
                <Privacy />
              </motion.div>
            }
          />
          <Route
            path="*"
            element={
              <motion.div {...pageTransition}>
                <NotFound />
              </motion.div>
            }
          />
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

import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

const Background3D = lazy(() => import("./components/Background3D"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Education = lazy(() => import("./pages/Education"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Per-page SEO metadata
const pageMeta = {
  "/": {
    title: "Shiv Kumar Rana - Full Stack Developer | MERN Stack Expert",
    description:
      "Shiv Kumar Rana — Full Stack Developer specializing in MERN stack, React.js, Node.js, Next.js and TypeScript. Based in Kolkata, India.",
  },
  "/about": {
    title: "About - Shiv Kumar Rana | Full Stack Developer",
    description:
      "Learn about Shiv Kumar Rana — Master of Computer Apllications Student",
  },
  "/projects": {
    title: "Projects - Shiv Kumar Rana | Full Stack Developer Portfolio",
    description:
      "Explore full-stack web projects built by Shiv Kumar Rana using React.js, Node.js, MongoDB, Next.js and TypeScript.",
  },
  "/skills": {
    title: "Skills - Shiv Kumar Rana | React, Node.js, MERN Stack",
    description:
      "Technical skills of Shiv Kumar Rana — React.js, Node.js, Express, MongoDB, Next.js, TypeScript, AWS, Docker and more.",
  },
  "/education": {
    title: "Education - Shiv Kumar Rana | B.Tech Computer Science",
    description:
      "Educational background of Shiv Kumar Rana — B.Tech in Computer Science with 8.48 CGPA.",
  },
  "/contact": {
    title: "Contact - Shiv Kumar Rana | Hire a Full Stack Developer",
    description:
      "Get in touch with Shiv Kumar Rana for freelance projects, job opportunities or collaborations. Based in Kolkata, India.",
  },
};

// Hook to update document title + meta description on route change
function SEOUpdater() {
  const location = useLocation();

  useEffect(() => {
    const meta = pageMeta[location.pathname] || {
      title: "Shiv Kumar Rana - Full Stack Developer",
      description:
        "Portfolio of Shiv Kumar Rana — Full Stack Developer specializing in MERN stack and modern web technologies.",
    };

    document.title = meta.title;

    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute("content", meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl)
      ogUrl.setAttribute(
        "content",
        `${window.location.origin}${location.pathname}`,
      );

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical)
      canonical.setAttribute(
        "href",
        `${window.location.origin}${location.pathname}`,
      );
  }, [location]);

  return null;
}

function App() {
  const [showBackground, setShowBackground] = useState(false);
  const shouldUseBackground = useMemo(() => {
    if (typeof window === "undefined") return false;

    const reducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )?.matches;
    const isSmallViewport = window.innerWidth < 1024;
    const lowCpu = navigator.hardwareConcurrency
      ? navigator.hardwareConcurrency <= 4
      : false;
    const lowMemory = navigator.deviceMemory ? navigator.deviceMemory <= 4 : false;

    return !(reducedMotion || isSmallViewport || lowCpu || lowMemory);
  }, []);

  useEffect(() => {
    if (!shouldUseBackground) return;

    let timeoutId;
    let idleId;

    const enableBackground = () => {
      timeoutId = window.setTimeout(() => setShowBackground(true), 900);
    };

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(enableBackground, { timeout: 1500 });
    } else {
      timeoutId = window.setTimeout(enableBackground, 700);
    }

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      if (idleId && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
    };
  }, [shouldUseBackground]);

  return (
    <BrowserRouter>
      <SEOUpdater />
      <div className="min-h-screen flex flex-col">
        {showBackground && shouldUseBackground ? (
          <Suspense fallback={null}>
            <Background3D />
          </Suspense>
        ) : null}
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

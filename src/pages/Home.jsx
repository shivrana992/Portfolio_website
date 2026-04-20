import vercelLogo from "@/assets/tech_logos/vercel.svg";
import {
  Github,
  Linkedin,
  MessageCircle,
  Copy,
  Check,
  FileDown,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import cvPdf from "@/assets/files/cv_pdf/Shiv(CV).pdf";
import { CONTACT_INFO } from "@/config/contact";

const Home = () => {
  const [copied, setCopied] = useState(false);
  const [githubRepos, setGithubRepos] = useState(0);
  const email = CONTACT_INFO.email;
  const whatsappNumber = CONTACT_INFO.whatsapp.replace(/\D/g, "");
  const githubUsername = new URL(CONTACT_INFO.github).pathname.split("/").filter(Boolean).pop();

  useEffect(() => {
    const controller = new AbortController();
    let timeoutId;
    let idleId;

    const fetchGithubProfile = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}`, {
          signal: controller.signal,
        });
        if (!response.ok) return;

        const data = await response.json();
        setGithubRepos(data?.public_repos || 0);
      } catch {
        // Ignore request failures so first paint remains smooth.
      }
    };

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(fetchGithubProfile, { timeout: 2500 });
    } else {
      timeoutId = window.setTimeout(fetchGithubProfile, 1000);
    }

    return () => {
      controller.abort();
      if (timeoutId) window.clearTimeout(timeoutId);
      if (idleId && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
    };
  }, [githubUsername]);

  function formatRepoCount(count) {
    if (count < 5) return count.toString();
    return `${Math.floor(count / 5) * 5}+`;
  }

  const displayRepos = formatRepoCount(githubRepos);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleEmailClick = (e) => {
    if (window.innerWidth <= 640) {
      window.location.href = `mailto:${email}`;
      e.preventDefault();
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 mt-7 sm:mt-0 md:mt-3 lg:mt-5">
      <div className="text-center relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 relative tracking-tighter">
          Shiv Kumar Rana
        </h1>
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 relative tracking-tighter">
          I design & code for web
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-4 sm:mb-5 max-w-2xl mx-auto px-2 sm:px-4">
          Student at NIT, Trichy, Tamil Nadu interested in Full Stack Development with
          expertise in React.js, Node.js and modern Web Technologies.
        </p>

        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <div className="flex justify-center space-x-3 sm:space-x-4">
            <a
              href={cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-black rounded-full text-sm sm:text-base font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <FileDown className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              Download CV
            </a>
            <Link
              to="/about"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 text-white rounded-full text-sm sm:text-base font-medium hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <User className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              About Me
            </Link>
          </div>

          <button
            onClick={handleEmailClick}
            className="group relative flex items-center gap-2 py-2 pl-8 pr-4 hover:bg-transparent transition-all cursor-copy sm:cursor-pointer"
            aria-label={`Email: ${email}`}
          >
            <div className="absolute left-0 flex items-center">
              <div className="w-5 h-5">
                <img src={vercelLogo} alt="Vercel" className="w-full h-full" loading="lazy" />
              </div>
              <span className="text-lg font-mono text-gray-400 ml-3 group-hover:text-white transition-colors">
                ~
              </span>
            </div>
            <span className="text-gray-400 group-hover:text-white transition-colors ml-4 sm:text-base">
              {email}
            </span>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity ml-1 hidden sm:block">
              {copied ? (
                <Check className="w-4 h-4 text-green-500" aria-hidden="true" />
              ) : (
                <Copy
                  className="w-4 h-4 text-gray-400 hover:text-white transition-colors"
                  aria-hidden="true"
                />
              )}
            </div>
          </button>
        </div>

        <div className="grid grid-cols-3 justify-items-center gap-6 mt-8 sm:mt-12 max-w-xs sm:max-w-none mx-auto">
          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group w-full"
            aria-label="Visit GitHub profile"
          >
            <div className="p-3 rounded-xl transition-colors mb-2 w-full max-w-[200px]">
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors mx-auto" />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-base sm:text-lg font-semibold">
                {displayRepos}
              </span>
              <span className="text-xs sm:text-sm text-gray-400">
                GitHub Projects
              </span>
            </div>
          </a>

          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group w-full"
            aria-label="Visit LinkedIn profile"
          >
            <div className="p-3 rounded-xl transition-colors mb-2 w-full max-w-[200px]">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors mx-auto" />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-base sm:text-lg font-semibold">500+</span>
              <span className="text-xs sm:text-sm text-gray-400">
                LinkedIn Followers
              </span>
            </div>
          </a>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group w-full"
            aria-label="Contact via WhatsApp"
          >
            <div className="p-3 rounded-xl transition-colors mb-2 w-full max-w-[200px]">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors mx-auto" />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-base sm:text-lg font-semibold">24x7</span>
              <span className="text-xs sm:text-sm text-gray-400">
                WhatsApp Me
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

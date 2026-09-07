"use client";

import { useEffect, useRef, memo } from "react";
import { LinkedinIcon } from "@/components/ui/SocialIcons";
import { ExternalLink } from "lucide-react";

interface LinkedInBadgeProps {
  className?: string;
}

const LinkedInBadge = memo(function LinkedInBadge({ className = "" }: LinkedInBadgeProps) {
  const badgeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!badgeContainerRef.current) return;

    // Inject the exact official badge markup requested
    badgeContainerRef.current.innerHTML = `
      <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="abhi-gurjar-b13067203" data-version="v1">
        <a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/abhi-gurjar-b13067203?trk=profile-badge" target="_blank" rel="noopener noreferrer">Abhi Gurjar</a>
      </div>
    `;

    // Load or trigger LinkedIn badge script
    const SCRIPT_URL = "https://platform.linkedin.com/badges/js/profile.js";
    let script = document.querySelector(`script[src="${SCRIPT_URL}"]`) as HTMLScriptElement | null;

    const renderBadges = () => {
      if (typeof (window as any).LIRenderAll === "function") {
        try {
          (window as any).LIRenderAll();
        } catch (err) {
          console.debug("LinkedIn badge render:", err);
        }
      }
    };

    if (!script) {
      script = document.createElement("script");
      script.src = SCRIPT_URL;
      script.async = true;
      script.defer = true;
      script.type = "text/javascript";
      script.onload = renderBadges;
      document.body.appendChild(script);
    } else {
      // Re-trigger render in case DOM mounted after script load
      renderBadges();
    }
  }, []);

  return (
    <div
      className={`card-glass rounded-2xl p-4 sm:p-5 border border-[#6366f1]/35 relative overflow-hidden flex flex-col items-center justify-between transition-all duration-500 hover:border-cyan-400/70 shadow-[0_0_35px_rgba(99,102,241,0.25),0_0_15px_rgba(14,165,233,0.15)] hover:shadow-[0_0_50px_rgba(99,102,241,0.4),0_0_25px_rgba(14,165,233,0.3)] badge-shine-effect w-full max-w-[320px] mx-auto ${className}`}
    >
      {/* Top radiant light beam */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 via-[#818cf8] to-transparent z-10" />

      {/* Header bar */}
      <div className="w-full flex items-center justify-between gap-2 pb-3 mb-3 border-b border-white/10 z-10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#0077b5]/20 border border-[#0077b5]/40 flex items-center justify-center text-[#38bdf8] shadow-[0_0_12px_rgba(0,119,181,0.4)]">
            <LinkedinIcon size={14} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white tracking-wide">LinkedIn Identity</h4>
            <p className="text-[10px] text-[#94a3b8]">Verified Professional</p>
          </div>
        </div>

        {/* Live pulsing status badge */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider">
            Verified
          </span>
        </div>
      </div>

      {/* AMOLED Display Well: Hugs the 250px LinkedIn badge with zero side gaps */}
      <div className="w-full max-w-[264px] bg-[#000000] rounded-xl border border-white/10 p-1.5 shadow-2xl flex flex-col items-center justify-center min-h-[285px] relative overflow-hidden z-10">
        {/* Subtle inner top glow */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#6366f1]/15 to-transparent pointer-events-none" />

        {/* Official LinkedIn Badge Container */}
        <div
          ref={badgeContainerRef}
          className="w-full flex justify-center items-center overflow-hidden"
          suppressHydrationWarning
        />
      </div>

      {/* Bottom Action Bar */}
      <a
        href="https://www.linkedin.com/in/abhi-gurjar-b13067203/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3.5 w-full max-w-[264px] flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-gradient-to-r from-[#0077b5]/20 via-[#6366f1]/25 to-[#0077b5]/20 hover:from-[#0077b5]/40 hover:to-[#6366f1]/40 border border-[#0077b5]/40 text-xs font-semibold text-[#38bdf8] hover:text-white transition-all shadow-[0_0_15px_rgba(14,165,233,0.2)] hover:shadow-[0_0_25px_rgba(14,165,233,0.45)] z-10 group"
      >
        <span>Connect on LinkedIn</span>
        <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    </div>
  );
});

export default LinkedInBadge;

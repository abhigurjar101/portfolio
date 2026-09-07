"use client";

import { useEffect, useRef, memo } from "react";
import { LinkedinIcon } from "@/components/ui/SocialIcons";
import { ShieldCheck } from "lucide-react";

interface LinkedInBadgeProps {
  className?: string;
}

const LinkedInBadge = memo(function LinkedInBadge({ className = "" }: LinkedInBadgeProps) {
  const badgeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!badgeContainerRef.current) return;

    // Inject exact official badge markup requested
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
      // Script already loaded; trigger re-scan for unrendered badge
      renderBadges();
    }
  }, []);

  return (
    <div
      className={`card-glass rounded-2xl p-5 border border-white/10 relative overflow-hidden flex flex-col items-center justify-center transition-all duration-300 hover:border-[#6366f1]/40 shadow-xl ${className}`}
    >
      {/* Decorative top header badge */}
      <div className="w-full flex items-center justify-between gap-3 pb-3 mb-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#0077b5]/15 border border-[#0077b5]/30 flex items-center justify-center text-[#0a66c2]">
            <LinkedinIcon size={14} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white tracking-wide">LinkedIn Profile</h4>
            <p className="text-[10px] text-[#94a3b8]">Official Verified Badge</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
          <ShieldCheck size={11} className="text-emerald-400" />
          Verified
        </span>
      </div>

      {/* Official LinkedIn Badge Container */}
      <div
        ref={badgeContainerRef}
        className="w-full flex justify-center items-center min-h-[280px] overflow-hidden"
        suppressHydrationWarning
      />
    </div>
  );
});

export default LinkedInBadge;

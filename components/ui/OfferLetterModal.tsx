"use client";

import { useState, useEffect } from "react";
import { FileCheck, ShieldCheck, ExternalLink, X, Building, Calendar, CheckCircle2, Lock, Download } from "lucide-react";
import { profile } from "@/data/profile";

export default function OfferLetterModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="group relative inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 text-[11px] sm:text-xs font-semibold tracking-wider uppercase rounded-md border border-emerald-500/35 bg-emerald-950/25 text-emerald-400 hover:bg-emerald-500/15 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all duration-200 cursor-pointer"
        title="View Verified Corporate Engagement Documents"
      >
        <ShieldCheck size={14} className="text-emerald-400 group-hover:scale-110 transition-transform shrink-0" />
        <span className="hidden lg:inline xl:hidden">Offer Letters</span>
        <span className="inline lg:hidden xl:inline">Offer Letters & Credentials</span>
      </button>

      {/* Modal Dialog */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-xl max-h-[88vh] flex flex-col rounded-2xl border border-white/15 bg-[#0d1117] shadow-[0_20px_70px_rgba(0,0,0,0.85)] overflow-hidden animate-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between p-5 sm:p-6 border-b border-white/10 bg-[#111827]/80 shrink-0">
              <div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 w-fit mb-2">
                  <ShieldCheck size={13} className="text-emerald-400" />
                  <span className="text-[10px] font-semibold text-emerald-300 tracking-wider uppercase">
                    Verified Career Credentials
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Employment Verification & Offer Letters
                </h3>
                <p className="text-xs text-[#94a3b8] mt-1">
                  Official appointments & verified documents for Abhi Kumar Gurjar.
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-[#94a3b8] hover:text-white hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Modal Body */}
            <div className="overflow-y-auto p-5 sm:p-6 space-y-4 flex-1">
              {/* Techeon IT Services Offer Letter Card */}
              <div className="p-4 rounded-xl border border-emerald-500/35 bg-gradient-to-br from-emerald-950/25 via-[#111827] to-[#0d1117] shadow-lg">
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                      <Building size={18} />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-sm font-bold text-white">Techeon IT Services Pvt. Ltd.</h4>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold">
                          Offer Letter Verified
                        </span>
                      </div>
                      <p className="text-xs text-emerald-400 font-semibold mt-0.5">
                        AI Engineer · Technical Department (Permanent, Remote)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 my-3 p-3 rounded-lg bg-black/40 border border-white/5 text-[11px]">
                  <div>
                    <span className="text-[#64748b] block">Offer Date</span>
                    <span className="text-[#cbd5e1] font-medium flex items-center gap-1 mt-0.5">
                      <Calendar size={11} className="text-[#818cf8]" /> 2nd July, 2026
                    </span>
                  </div>
                  <div>
                    <span className="text-[#64748b] block">Joining Date</span>
                    <span className="text-[#cbd5e1] font-medium flex items-center gap-1 mt-0.5">
                      <Calendar size={11} className="text-emerald-400" /> 6th July, 2026
                    </span>
                  </div>
                  <div>
                    <span className="text-[#64748b] block">Compensation (CTC)</span>
                    <span className="text-emerald-400 font-bold font-mono">₹10,50,000 / year (10.5 LPA)</span>
                  </div>
                  <div>
                    <span className="text-[#64748b] block">Company Accreditations</span>
                    <span className="text-[#cbd5e1] font-medium">ISO 27001 & ISO 9001</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 pt-1">
                  <span className="text-[10px] text-[#64748b]">
                    Signatory: <strong className="text-[#94a3b8]">Ranjitha Poosa</strong>, Sr. HR
                  </span>
                  <a
                    href="/documents/techeon-offer-letter.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold tracking-wide transition-colors shadow"
                  >
                    <FileCheck size={13} />
                    <span>View PDF Letter</span>
                  </a>
                </div>
              </div>

              {/* Uncodemy Item */}
              <div className="p-4 rounded-xl border border-white/10 bg-[#111827]/80 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#6366f1]/10 border border-[#6366f1]/30 flex items-center justify-center text-[#818cf8] shrink-0 mt-0.5">
                    <Building size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-white">Uncodemy</h4>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 font-semibold">
                        Active Role
                      </span>
                    </div>
                    <p className="text-xs text-[#818cf8] font-medium mt-0.5">Sr Gen AI & ML Engineer & Trainer</p>
                    <p className="text-[11px] text-[#94a3b8] mt-1 flex items-center gap-1">
                      <Calendar size={11} className="text-[#64748b]" /> Jul 2026 – Present · Corporate Batch Delivery
                    </p>
                  </div>
                </div>
                <span className="text-[11px] text-emerald-400 font-mono shrink-0 flex items-center gap-1 font-semibold">
                  <CheckCircle2 size={13} /> Verified
                </span>
              </div>

              {/* Ayush Bhandari LLP Item */}
              <div className="p-4 rounded-xl border border-white/10 bg-[#111827]/80 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#6366f1]/10 border border-[#6366f1]/30 flex items-center justify-center text-[#818cf8] shrink-0 mt-0.5">
                    <Building size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Ayush Bhandari LLP</h4>
                    <p className="text-xs text-[#818cf8] font-medium mt-0.5">GenAI & Machine Learning Engineer</p>
                    <p className="text-[11px] text-[#94a3b8] mt-1 flex items-center gap-1">
                      <Calendar size={11} className="text-[#64748b]" /> Jun 2024 – Jul 2026 · Production GraphRAG
                    </p>
                  </div>
                </div>
                <span className="text-[11px] text-emerald-400 font-mono shrink-0 flex items-center gap-1 font-semibold">
                  <CheckCircle2 size={13} /> Verified
                </span>
              </div>

              {/* Confidentiality Notice */}
              <div className="p-3.5 rounded-lg bg-[#1a2333]/40 border border-white/5 text-[11px] text-[#94a3b8] flex items-start gap-2.5">
                <Lock size={14} className="text-[#818cf8] shrink-0 mt-0.5" />
                <span>
                  Official appointment document from Techeon IT Services is available for preview. Additional confidential terms & client NDAs remain protected under company policy.
                </span>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 sm:p-5 border-t border-white/10 bg-[#111827]/90 flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href="/documents/techeon-offer-letter.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#6366f1] text-white text-xs font-semibold tracking-wide hover:bg-[#818cf8] transition-colors shadow"
              >
                <FileCheck size={14} />
                <span>Open Techeon PDF</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-white/15 text-white text-xs font-semibold tracking-wide hover:bg-white/10 transition-colors"
              >
                <ExternalLink size={14} />
                <span>Verify on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

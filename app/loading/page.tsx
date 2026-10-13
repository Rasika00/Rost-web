"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, RotateCw } from "lucide-react";
import { PageLoader } from "@/components/page-loader";

export default function LoadingPreviewPage() {
  const [bootKey, setBootKey] = useState(0);

  const restartBoot = () => {
    setBootKey((prev) => prev + 1);
  };

  return (
    <div className="relative min-h-[85vh] bg-[#070709] flex flex-col items-center justify-center py-20 px-4">
      {/* Active Loader Instance - always plays on this page */}
      <PageLoader
        key={bootKey}
        forceShow={true}
      />

      {/* Control Panel once loader completes */}
      <div className="z-10 flex flex-col items-center space-y-6 max-w-sm text-center">
        <div className="space-y-2">
          <span className="text-xs font-mono text-[#ff6b00] tracking-widest uppercase">
            // BOOT COMPLETE
          </span>
          <h1 className="text-xl font-mono font-bold text-white uppercase tracking-wider">
            ROST Loading Interface
          </h1>
          <p className="text-xs text-[#8e8e8e] font-sans">
            Minimal, animated cybernetic loader designed after the official ROST insignia.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={restartBoot}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ff6b00] hover:bg-[#ff7a1a] text-black font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-md"
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>Replay Animation</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Go to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

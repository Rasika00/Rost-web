import { SITE_CONFIG } from "@/data/site-data";

export function Footer() {
  return (
    <footer className="relative bg-[#070707] border-t border-[#222222] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#737373]">
        <div className="flex items-center gap-2">
          <span className="text-[#fafafa] font-bold tracking-wider">{SITE_CONFIG.name}</span>
          <span>•</span>
          <span>Faculty of Technology, Rajarata University of Sri Lanka</span>
        </div>

        <div>
          © 2026 {SITE_CONFIG.fullName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

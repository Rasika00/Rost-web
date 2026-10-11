import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, Shield, ExternalLink, Sparkles } from "lucide-react";
import { AboutSection } from "@/components/about-section";
import { CONSTITUTION_DATA } from "@/data/constitution-data";
import { SITE_CONFIG } from "@/data/site-data";

export const metadata: Metadata = {
  title: `About // ${CONSTITUTION_DATA.officialName} (${CONSTITUTION_DATA.shortForm})`,
  description:
    "Official Constitution, Mission, Vision, Objectives, and Membership Charter of the Robotic Society of Technology (ROST), Faculty of Technology.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen pt-20 sm:pt-24 pb-16">
      {/* Top Breadcrumb & Status HUD */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-2">
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#737373]">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[#a3a3a3] hover:text-[#ff6b00] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO FLIGHT DECK</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
            <span className="text-[#fafafa]">CONSTITUTION RATIFIED</span>
            <span className="text-[#444444]">//</span>
            <span className="text-[#ff7a1a]">FACULTY OF TECHNOLOGY</span>
          </div>
        </div>
      </div>

      {/* Main Constitution & About Section */}
      <AboutSection showFullNavigationLink={false} />
    </div>
  );
}

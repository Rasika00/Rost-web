"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  BookOpen,
  Code2,
  Clock,
  Calendar,
  Terminal,
  Search,
  Filter,
  ArrowRight,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { ARTICLES_DATA, Article } from "@/data/articles-data";
import { soundFx } from "@/lib/sound";

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedArticle, setExpandedArticle] = useState<string | null>(
    ARTICLES_DATA[0].id
  );
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  const categories = [
    "All",
    "Firmware & Embedded",
    "Autonomous Robotics",
    "Hardware & PCB Design",
  ];

  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      const matchesCat =
        selectedCategory === "All" || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCat;

      const matchesQuery =
        article.title.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        article.tags.some((t) => t.toLowerCase().includes(q)) ||
        article.author.name.toLowerCase().includes(q);

      return matchesCat && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopyCode = (filename: string, code: string) => {
    soundFx.playTelemetryClick();
    navigator.clipboard.writeText(code);
    setCopiedSnippet(filename);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141414] border border-[#ff6b00]/40 text-xs font-mono text-[#ff7a1a]">
            <span>// TECHNICAL KNOWLEDGE BASE & DEVLOGS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-mono font-black uppercase text-[#fafafa]">
            Research & Engineering Devlogs
          </h1>

          <p className="text-sm sm:text-base text-[#a3a3a3] font-sans leading-relaxed">
            In-depth engineering documentation authored by ROST leads: 50kHz FOC commutation math,
            ROS 2 CycloneDDS tuning, KiCAD 4-layer PCB impedance routing, and factor-graph SLAM.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="p-4 sm:p-6 rounded-2xl bg-[#121212] border border-[#262626] space-y-4">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-4 h-4 text-[#737373]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search research logs by topic, algorithm, author, or language..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#0d0d0d] border border-[#262626] text-xs font-mono text-[#fafafa] placeholder:text-[#555555] focus:outline-none focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00] transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono text-[#737373] mr-2">CATEGORY:</span>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    soundFx.playTelemetryClick();
                    setSelectedCategory(cat);
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#ff6b00] text-[#080808] font-bold shadow-[0_0_15px_rgba(255,107,0,0.35)]"
                      : "bg-[#171717] text-[#a3a3a3] hover:text-[#fafafa] hover:bg-[#202020] border border-[#262626]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-6">
          {filteredArticles.map((article) => {
            const isExpanded = expandedArticle === article.id;
            return (
              <article
                key={article.id}
                className="rounded-2xl bg-[#121212] border border-[#262626] hover:border-[#ff6b00]/50 transition-all overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.4)]"
              >
                {/* Article Top Bar */}
                <div
                  onClick={() => {
                    soundFx.playTelemetryClick();
                    setExpandedArticle(isExpanded ? null : article.id);
                  }}
                  className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none hover:bg-[#151515] transition-colors"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#1c1c1c] text-[#ff7a1a] border border-[#ff6b00]/30 font-bold uppercase">
                        {article.category}
                      </span>
                      <span className="text-[#737373] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#ff6b00]" />
                        {article.readTime}
                      </span>
                      <span className="text-[#737373]">•</span>
                      <span className="text-[#737373]">{article.publishedAt}</span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-mono font-bold text-[#fafafa] leading-snug">
                      {article.title}
                    </h2>

                    <p className="text-xs text-[#a3a3a3] font-sans leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 self-end md:self-center shrink-0">
                    <div className="text-right hidden sm:block">
                      <div className="text-xs font-mono text-[#fafafa] font-bold">
                        {article.author.name}
                      </div>
                      <div className="text-[10px] font-mono text-[#737373]">
                        {article.author.role}
                      </div>
                    </div>

                    <div className="p-2 rounded-lg bg-[#181818] border border-[#262626] text-[#ff6b00]">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Article Body & Code Snippets */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#222222] space-y-6 animate-in fade-in duration-200">
                    {/* Narrative paragraphs */}
                    <div className="space-y-3 text-sm text-[#a3a3a3] font-sans leading-relaxed">
                      {article.content.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>

                    {/* Code Snippets */}
                    {article.snippets && article.snippets.length > 0 && (
                      <div className="space-y-4">
                        {article.snippets.map((snip, idx) => (
                          <div
                            key={idx}
                            className="rounded-xl border border-[#262626] bg-[#090909] overflow-hidden"
                          >
                            {/* Snippet Header */}
                            <div className="flex items-center justify-between px-4 py-2 border-b border-[#222222] bg-[#101010] font-mono text-xs text-[#737373]">
                              <div className="flex items-center gap-2">
                                <Terminal className="w-3.5 h-3.5 text-[#ff6b00]" />
                                <span className="text-[#fafafa] font-semibold">{snip.filename}</span>
                                <span className="text-[10px] uppercase text-[#ff7a1a]">[{snip.language}]</span>
                              </div>

                              <button
                                onClick={() => handleCopyCode(snip.filename, snip.code)}
                                className="flex items-center gap-1.5 text-[11px] text-[#a3a3a3] hover:text-[#ff6b00] transition-colors p-1 rounded hover:bg-[#181818]"
                              >
                                {copiedSnippet === snip.filename ? (
                                  <>
                                    <Check className="w-3.5 h-3.5 text-[#22c55e]" />
                                    <span className="text-[#22c55e]">Copied</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3.5 h-3.5" />
                                    <span>Copy Code</span>
                                  </>
                                )}
                              </button>
                            </div>

                            {/* Snippet Body */}
                            <pre className="p-4 text-xs font-mono text-[#d4d4d4] overflow-x-auto leading-relaxed bg-[#080808]">
                              <code>{snip.code}</code>
                            </pre>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#222222]">
                      <span className="text-[10px] font-mono text-[#737373]">TAGS:</span>
                      {article.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#171717] border border-[#262626] text-[#a3a3a3]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

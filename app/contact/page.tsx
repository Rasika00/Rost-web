"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Send,
  MessageSquare,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Radio,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { toast } from "sonner";
import { SITE_CONFIG } from "@/data/site-data";
import { ScrollReveal } from "@/components/scroll-reveal";

function ContactContent() {
  const searchParams = useSearchParams();
  const preselectedType = searchParams.get("type");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState(
    preselectedType === "sponsor" ? "Sponsorship" : "Recruitment"
  );
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who is eligible to join the ROST engineering team?",
      a: "ROST recruits actively each semester across all disciplines: mechanical, electrical, computer science, software, robotics, and physics. No prior combat robotics experience is required—we run onboarding bootcamps covering CAD, SMD soldering, and FreeRTOS.",
    },
    {
      q: "How can corporate sponsors partner with ROST?",
      a: "Sponsors receive prominent branding on tournament combat robots (seen by millions on live broadcasts), access to our top graduating roboticist talent, and direct hardware stress validation on our test benches.",
    },
    {
      q: "Where is the physical robotics prototyping lab located?",
      a: "Our machine shop and subterranean test lab is located in the Faculty of Technology, Advanced Autonomous Systems Complex, Sector 9.",
    },
    {
      q: "Can high school or external teams use our combat test arena?",
      a: "Yes! During designated open arena sparring days, external teams with certified safety qualifications can test weapon spin-ups inside our Lexan safety cage.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !message) {
      toast.error("TELEMETRY_INCOMPLETE: Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      toast.success("DISPATCH_TRANSMITTED // Squad leadership notified.", {
        description: `Confirmation telemetry sent to ${email}`,
      });
      setFullName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 700);
  };

  return (
    <div className="relative min-h-screen pt-24 sm:pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <ScrollReveal direction="down" duration={0.6}>
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141414] border border-[#ff6b00]/40 text-xs font-mono text-[#ff7a1a]">
              <span>// TRANSMISSION BEACON & RECRUITMENT</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-mono font-black uppercase text-[#fafafa]">
              Connect With ROST Command
            </h1>

            <p className="text-sm sm:text-base text-[#a3a3a3] font-sans leading-relaxed">
              Apply to join our hardware engineering squad, propose corporate component sponsorships,
              or inquire about competitive tournament match schedules.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Grid: Form + Quick Connect Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Inquiry Form */}
          <ScrollReveal direction="up" duration={0.6} className="lg:col-span-7">
            <div className="rounded-2xl bg-[#121212] border border-[#262626] p-6 sm:p-8 space-y-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <div className="space-y-1">
                <h2 className="text-lg font-mono font-bold text-[#fafafa] uppercase">
                  // TRANSMIT TELEMETRY MESSAGE
                </h2>
                <p className="text-xs text-[#a3a3a3]">
                  Our executive squadron typically responds within 24 operational hours.
                </p>
              </div>

              {isSent ? (
                <div className="p-6 rounded-xl bg-[#0e2a14] border border-[#22c55e]/40 text-xs font-mono text-[#22c55e] space-y-3">
                  <div className="flex items-center gap-2 text-base font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>TRANSMISSION CONFIRMED</span>
                  </div>
                  <p className="text-xs text-[#86efac]">
                    Your dossier has been securely routed to our recruitment and sponsorship marshals.
                  </p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="px-4 py-2 rounded-lg bg-[#141414] text-[#fafafa] border border-[#262626] hover:border-[#ff6b00] transition-colors cursor-pointer"
                  >
                    Send another message &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] text-[#737373] mb-1">
                        OPERATIVE FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Mercer"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d0d0d] border border-[#262626] text-[#fafafa] placeholder:text-[#555555] focus:outline-none focus:border-[#ff6b00]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-[#737373] mb-1">
                        DISPATCH EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@institution.edu"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d0d0d] border border-[#262626] text-[#fafafa] placeholder:text-[#555555] focus:outline-none focus:border-[#ff6b00]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] text-[#737373] mb-1">
                        TRANSMISSION CATEGORY
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d0d0d] border border-[#262626] text-[#fafafa] focus:outline-none focus:border-[#ff6b00]"
                      >
                        <option value="Recruitment">Student Recruitment & Squad Tryouts</option>
                        <option value="Sponsorship">Corporate / Hardware Sponsorship</option>
                        <option value="Competition Inquiry">Arena Tournament & Combat Challenge</option>
                        <option value="Research Collaboration">Academic Research Collaboration</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] text-[#737373] mb-1">
                        SUBJECT DIRECTIVE
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Mechatronics Lab Application"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d0d0d] border border-[#262626] text-[#fafafa] placeholder:text-[#555555] focus:outline-none focus:border-[#ff6b00]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] text-[#737373] mb-1">
                      MESSAGE / DOSSIER BRIEFING *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Provide details about your engineering background, project ideas, or partnership objectives..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d0d0d] border border-[#262626] text-[#fafafa] placeholder:text-[#555555] focus:outline-none focus:border-[#ff6b00]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 rounded-xl bg-[#ff6b00] hover:bg-[#ffa040] text-[#080808] font-bold text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,107,0,0.35)] cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Transmitting..." : "Send Secure Transmission"}</span>
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Quick-Connect Panels */}
          <ScrollReveal direction="up" delay={120} duration={0.6} className="lg:col-span-5 space-y-4">
            {/* Discord Community */}
            <a
              href={SITE_CONFIG.socials.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#121212] border border-[#262626] hover:border-[#ff6b00]/60 transition-all flex items-start gap-4 group cursor-pointer block hover:-translate-y-0.5"
            >
              <div className="p-3 rounded-xl bg-[#171717] border border-[#262626] text-[#ff6b00] group-hover:scale-110 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold text-[#fafafa] group-hover:text-[#ff6b00] transition-colors">
                    Discord Comms Server
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#737373]" />
                </div>
                <p className="text-xs text-[#a3a3a3]">
                  Join 1,200+ roboticists discussing FreeRTOS, CNC machining, and tournament battle footage.
                </p>
              </div>
            </a>

            {/* Physical Lab Facility */}
            <div className="p-5 rounded-2xl bg-[#121212] border border-[#262626] space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#171717] border border-[#262626] text-[#ff6b00]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-bold text-[#fafafa]">
                    Physical Facility & Testing Cage
                  </h3>
                  <div className="text-[10px] font-mono text-[#ff7a1a]">
                    SECTOR 9 // ROOM 104-B
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#a3a3a3] font-mono leading-relaxed">
                {SITE_CONFIG.affiliation.faculty} <br />
                {SITE_CONFIG.affiliation.lab} <br />
                {SITE_CONFIG.affiliation.university}
              </p>
            </div>

            {/* GitHub Organization */}
            <a
              href={SITE_CONFIG.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#121212] border border-[#262626] hover:border-[#ff6b00]/60 transition-all flex items-start gap-4 group cursor-pointer block hover:-translate-y-0.5"
            >
              <div className="p-3 rounded-xl bg-[#171717] border border-[#262626] text-[#ff6b00] group-hover:scale-110 transition-transform">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold text-[#fafafa] group-hover:text-[#ff6b00] transition-colors">
                    GitHub Open Source Firmware
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#737373]" />
                </div>
                <p className="text-xs text-[#a3a3a3]">
                  Fork our ROS2 Humble packages, STM32 FOC motor controllers, and KiCAD board layouts.
                </p>
              </div>
            </a>
          </ScrollReveal>
        </div>

        {/* FAQ Accordion Section */}
        <ScrollReveal direction="up" duration={0.6}>
          <div className="space-y-6 pt-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono text-[#ff6b00] tracking-widest uppercase">
                // FREQUENTLY ASKED TELEMETRY
              </span>
              <h2 className="text-2xl sm:text-3xl font-mono font-black uppercase text-[#fafafa]">
                Recruitment & Sponsorship FAQ
              </h2>
            </div>

            <div className="divide-y divide-[#222222] rounded-2xl border border-[#262626] bg-[#121212] overflow-hidden">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="p-5 select-none cursor-pointer transition-colors hover:bg-[#161616]"
                    onClick={() => {
                      setOpenFaq(isOpen ? null : idx);
                    }}
                  >
                    <div className="flex items-center justify-between text-sm font-mono font-bold text-[#fafafa]">
                      <span className="flex items-center gap-3">
                        <span className="text-[#ff6b00]">0{idx + 1}.</span>
                        <span>{faq.q}</span>
                      </span>
                      <span className="text-[#ff6b00] ml-2">
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </span>
                    </div>

                    {isOpen && (
                      <p className="mt-3 text-xs text-[#a3a3a3] font-sans leading-relaxed pl-7">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-mono text-[#ff6b00]">INITIALIZING_BEACON...</div>}>
      <ContactContent />
    </Suspense>
  );
}

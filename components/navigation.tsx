"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Cpu,
  Bot,
  Zap,
  Radio,
  Menu,
  X,
  ExternalLink,
  ChevronRight,
  ShieldAlert,
} from "lucide-react";
import { SITE_CONFIG, NavItem } from "@/data/site-data";

export function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Only calculate active section when on the home page
      if (pathname === "/") {
        const sectionIds = SITE_CONFIG.navItems.map((item) => item.sectionId);
        const scrollPosition = window.scrollY + 140;

        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const section = document.getElementById(sectionIds[i]);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (pathname === "/") {
      e.preventDefault();
      setMobileOpen(false);
      const targetId = item.sectionId;
      setActiveSection(targetId);

      const lenis = (
        window as unknown as {
          lenis?: { scrollTo: (target: string | HTMLElement | number, opts?: object) => void };
        }
      ).lenis;

      if (targetId === "home") {
        if (lenis) {
          lenis.scrollTo(0, { duration: 1.2 });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        window.history.replaceState(null, "", "/");
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          if (lenis) {
            lenis.scrollTo(el, { offset: -70, duration: 1.2 });
          } else {
            el.scrollIntoView({ behavior: "smooth" });
          }
          window.history.replaceState(null, "", `/#${targetId}`);
        }
      }
    } else {
      setMobileOpen(false);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      setMobileOpen(false);
      setActiveSection("home");
      const lenis = (
        window as unknown as {
          lenis?: { scrollTo: (target: string | HTMLElement | number, opts?: object) => void };
        }
      ).lenis;
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      window.history.replaceState(null, "", "/");
    } else {
      setMobileOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-3 sm:px-4 pt-2 sm:pt-2.5 pointer-events-none">
        <nav
          className={`pointer-events-auto w-full max-w-6xl rounded-2xl border transition-all duration-300 backdrop-blur-xl ${
            scrolled
              ? "bg-[#0d0d0d]/90 border-[#ff6b00]/30 shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
              : "bg-[#0d0d0d]/75 border-[#262626] shadow-[0_4px_25px_rgba(0,0,0,0.5)]"
          }`}
        >
          <div className="flex items-center justify-between px-3 sm:px-5 py-1.5 sm:py-2">
            {/* Brand Logo */}
            <Link
              href="/"
              onClick={handleLogoClick}
              className="group flex items-center cursor-pointer"
            >
              <div className="relative flex items-center justify-center">
                <Image
                  src={SITE_CONFIG.logo}
                  alt={SITE_CONFIG.name}
                  width={200}
                  height={56}
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-[0_0_16px_rgba(255,107,0,0.35)]"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {SITE_CONFIG.navItems.map((item) => {
                const isActive =
                  pathname === "/"
                    ? activeSection === item.sectionId
                    : pathname === item.href ||
                      (item.href === "/projects" && pathname === "/project");

                return (
                  <Link
                    key={item.name}
                    href={pathname === "/" ? `/#${item.sectionId}` : item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`relative px-3.5 py-2 text-sm xl:text-base font-mono font-medium tracking-wide transition-all duration-200 rounded-lg flex items-center gap-1.5 group cursor-pointer ${
                      isActive
                        ? "text-[#fafafa] font-bold bg-[#171717] shadow-[0_0_15px_rgba(255,107,0,0.15)]"
                        : "text-[#a3a3a3] hover:text-[#fafafa] hover:bg-[#141414]"
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#ff6b00]/15 text-[#ff7a1a] border border-[#ff6b00]/30 font-semibold">
                        {item.badge}
                      </span>
                    )}

                    {/* Active Laser Underline Indicator */}
                    {isActive ? (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#ff6b00] shadow-[0_0_10px_#ff6b00] rounded-full transition-all" />
                    ) : (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-transparent group-hover:bg-[#ff6b00]/50 transition-colors rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Trigger */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(!mobileOpen);
                }}
                className="p-2 rounded-lg bg-[#141414] border border-[#262626] text-[#fafafa] hover:border-[#ff6b00] transition-colors cursor-pointer"
                aria-label="Open Navigation Menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-[#080808]/95 backdrop-blur-2xl lg:hidden flex flex-col pt-24 px-6 pb-8 justify-between animate-in fade-in duration-200">
          <div className="space-y-2">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#262626]">
              <div className="flex items-center">
                <Image
                  src={SITE_CONFIG.logo}
                  alt={SITE_CONFIG.name}
                  width={140}
                  height={48}
                  className="h-11 sm:h-12 w-auto object-contain"
                />
              </div>
              <span className="text-xs font-mono text-[#737373] tracking-widest uppercase">
                // NAV_INDEX
              </span>
            </div>

            {SITE_CONFIG.navItems.map((item, idx) => {
              const isActive =
                pathname === "/"
                  ? activeSection === item.sectionId
                  : pathname === item.href ||
                    (item.href === "/projects" && pathname === "/project");
              return (
                <Link
                  key={item.name}
                  href={pathname === "/" ? `/#${item.sectionId}` : item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`flex items-center justify-between p-4 rounded-xl border text-base font-mono tracking-wider transition-all ${
                    isActive
                      ? "bg-[#141414] border-[#ff6b00] text-[#ff7a1a] shadow-[0_0_15px_rgba(255,107,0,0.15)]"
                      : "bg-[#0d0d0d] border-[#222222] text-[#fafafa] hover:border-[#333333]"
                  }`}
                  style={{ animationDelay: `${idx * 40}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[#737373]">0{idx + 1}</span>
                    <span className="font-semibold text-base">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#ff6b00]/15 text-[#ff7a1a] border border-[#ff6b00]/30 font-semibold">
                        {item.badge}
                      </span>
                    )}
                    <ChevronRight className="w-4 h-4 text-[#737373]" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Mobile Footer Quick Actions */}
          <div className="space-y-4 pt-6 border-t border-[#262626]">
            <Link
              href="/projects"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#141414] border border-[#262626] text-xs font-mono text-[#fafafa] hover:border-[#ff6b00]"
            >
              <Bot className="w-4 h-4 text-[#ff6b00]" />
              <span>Bot Fleet</span>
            </Link>

            <div className="flex items-center justify-between text-[11px] font-mono text-[#737373] px-1">
              <span>{SITE_CONFIG.affiliation.faculty}</span>
              <span className="text-[#ff6b00]">ROST-RTOS v4.2</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

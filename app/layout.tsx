import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageLoader } from "@/components/page-loader";
import { SmoothScrollProvider } from "@/components/smooth-scroll";
import { ScrollProgress } from "@/components/scroll-progress";
import { Toaster } from "sonner";
import { SITE_CONFIG } from "@/data/site-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} // ${SITE_CONFIG.fullName}`,
  description: SITE_CONFIG.description,
  keywords: [
    "ROST",
    "Robotic Society of Technology",
    "Combat Robotics",
    "Autonomous Robotics",
    "SLAM",
    "ROS 2",
    "Mechatronics",
    "BattleBots",
    "Engineering",
  ],
  authors: [{ name: "ROST Robotics Mechatronics Laboratory" }],
  openGraph: {
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#080808] text-[#fafafa] font-sans selection:bg-[#ff6b00]/30 selection:text-[#ff7a1a]">
        <SmoothScrollProvider>
          <ScrollProgress />
          <PageLoader />
          <Navigation />
          <main className="flex-1 pt-20 sm:pt-24">{children}</main>
          <Footer />
          <Toaster
            theme="dark"
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#141414",
                border: "1px solid #ff6b00",
                color: "#fafafa",
                fontFamily: "var(--font-geist-mono)",
                fontSize: "12px",
              },
            }}
          />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

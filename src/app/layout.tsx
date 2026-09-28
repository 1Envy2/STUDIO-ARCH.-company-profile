import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import GlobalNavbar from "@/components/GlobalNavbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agency | Premium Design & Strategy",
  description: "Kami membantu perusahaan menyederhanakan hal kompleks menjadi pengalaman visual yang elegan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} font-inter antialiased bg-slate-50 text-slate-900`}
      >
        <LenisProvider>
          <GlobalNavbar />
          {/* Main wrapper */}
          <main>
            {children}
          </main>
        </LenisProvider>
      </body>
    </html>
  );
}

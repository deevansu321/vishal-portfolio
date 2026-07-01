import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CursorGlow } from "@/components/CursorGlow";
import { Terminal } from "@/components/Terminal";
import { profile } from "@/lib/data";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} — Flutter Developer`,
  description: profile.summary,
  keywords: [
    "Vishal Choudhary",
    "Flutter Developer",
    "Dart",
    "Mobile App Developer",
    "Cross-platform Developer",
    "Firebase",
    "GetX",
    "Riverpod",
  ],
  openGraph: {
    title: `${profile.name} — Flutter Developer`,
    description: profile.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ScrollProgress />
          <CursorGlow />
          <Terminal />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

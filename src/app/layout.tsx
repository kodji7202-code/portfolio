import type { Metadata, Viewport } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Cojocaru Claudiu | Full Stack Web Developer",
  description:
    "Portfolio of Cojocaru Claudiu, a Full Stack Web Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Cojocaru Claudiu" }],
  openGraph: {
    title: "Cojocaru Claudiu | Full Stack Web Developer",
    description:
      "Portfolio of Cojocaru Claudiu, a Full Stack Web Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    type: "website",
    locale: "en_US",
    url: "https://claudiu.dev",
    siteName: "Cojocaru Claudiu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cojocaru Claudiu | Full Stack Web Developer",
    description:
      "Portfolio of Cojocaru Claudiu, a Full Stack Web Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.add('light');
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {/* Clash Display Font - loaded via @font-face in globals.css */}
        {children}
      </body>
    </html>
  );
}

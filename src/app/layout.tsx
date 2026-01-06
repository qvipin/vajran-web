import type { Metadata } from "next";
import { Instrument_Serif, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "VAJRAN | Digital Atelier",
  description:
    "Your idea is worthless until we build it. We are a digital atelier refining the web with raw code and intentional design.",
  metadataBase: new URL("https://vajran.com"),
  openGraph: {
    title: "VAJRAN | Digital Atelier",
    description: "Your idea is worthless until we build it. Raw code and intentional design.",
    url: "https://vajran.com",
    siteName: "VAJRAN",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const themeScript = `
  (function() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${instrumentSerif.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

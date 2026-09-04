import type { Metadata, Viewport } from "next";
import { Source_Serif_4, Lato } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

// Matches the church's own wordmark: a transitional serif with wedge serifs
// and moderate stroke contrast — not the didone look of Playfair.
const sourceSerif = Source_Serif_4({
  variable: "--font-serif-display",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const SITE_URL = "https://libertybaptistacademy.org";
const SITE_NAME = "Liberty Baptist Academy";
const SITE_TAGLINE = "K–12 Christian School in Sarasota, FL";
const SITE_DESCRIPTION =
  "Liberty Baptist Academy is a K–12 Christian school in Sarasota, Florida, offering Biblical education, individualized academic progress, A.C.E. academics, Hawks athletics, and Step Up For Students scholarships.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  icons: {
    icon: "/9c0139fe-ff17-4b4b-a283-677230e511a9.png",
    shortcut: "/9c0139fe-ff17-4b4b-a283-677230e511a9.png",
    apple: "/9c0139fe-ff17-4b4b-a283-677230e511a9.png",
  },
  keywords: [
    "Liberty Baptist Academy",
    "LBA Sarasota",
    "Christian school Sarasota FL",
    "private school Sarasota",
    "Step Up For Students Sarasota",
    "ACE school Sarasota",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    images: [
      {
        url: "/academy-student-assembly.jpg",
        width: 1200,
        height: 900,
        alt: `${SITE_NAME} students gathered in Sarasota, Florida`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: ["/academy-student-assembly.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Favicon + touch icon are generated from app/icon.png and app/apple-icon.png
  // (the church's liberty-bell mark) by Next's file conventions.
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  category: "education",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9fbfd" },
    { media: "(prefers-color-scheme: dark)", color: "#002760" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${lato.variable} antialiased`}
    >
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/9c0139fe-ff17-4b4b-a283-677230e511a9.png"
        />
        <link
          rel="shortcut icon"
          type="image/png"
          href="/9c0139fe-ff17-4b4b-a283-677230e511a9.png"
        />
        <link
          rel="apple-touch-icon"
          href="/9c0139fe-ff17-4b4b-a283-677230e511a9.png"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}

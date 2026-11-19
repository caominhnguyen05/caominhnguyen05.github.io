import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./components/shared.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const headingFont = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-heading",
  display: "swap",
});

const description =
  "Cao Minh Nguyen — CS graduate from TU Delft. Explore my software engineering experience, backend and full-stack projects, and education.";

export const metadata: Metadata = {
  title: "Cao Minh Nguyen",
  description,
  metadataBase: new URL("https://caominhnguyen.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Cao Minh Nguyen",
    description,
    url: "/",
    type: "website",
    images: [{ url: "/profile-photo.jpg", alt: "Cao Minh Nguyen" }],
  },
  other: { "page-type": "service", "site-kind": "other" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-type="service"
      data-radius="soft"
      data-buttons="tonal"
      suppressHydrationWarning
    >
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* eslint-disable-next-line @next/next/no-css-tags -- The motion kit is served as an unmodified static asset. */}
        <link rel="stylesheet" href="/assets/motion/motion.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700)",
          }}
        />
      </head>
      <body className={`${inter.variable} ${headingFont.variable} antialiased`}>
        {children}
        <Script id="portfolio-motion" type="module" src="/assets/motion/motion.js" />
        <Script id="portfolio-moments" type="module" src="/assets/moments/moments.js" />
      </body>
    </html>
  );
}

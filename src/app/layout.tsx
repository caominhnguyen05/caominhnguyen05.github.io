import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import "./components/shared.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const headingFont = Instrument_Serif({
  subsets: ["latin"], weight: "400", style: "italic",
  variable: "--font-heading", display: "swap",
});

export const metadata: Metadata = {
  title: "Cao Minh Nguyen",
  description:
    "Cao Minh Nguyen — CS graduate from TU Delft. Explore my software engineering experience, backend and full-stack projects, and education.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${headingFont.variable} antialiased`}>{children}</body>
    </html>
  );
}

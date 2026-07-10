import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Analytics } from "@/components/analytics/Analytics";
import { PostHogProvider } from "@/components/analytics/PostHogProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "atonomi | AI-Powered Direct Mail for Print Shops",
  description:
    "Automate your B2B sales. Send personalized postcards with AI-generated mockups that drive local business calls.",
  metadataBase: new URL("https://print.atonomi.ai"),
  keywords: [
    "print shop marketing",
    "direct mail automation",
    "AI postcards",
    "B2B print sales",
    "local business outreach",
  ],
  openGraph: {
    title: "atonomi | AI-Powered Direct Mail for Print Shops",
    description:
      "Automate your B2B sales. Send personalized postcards with AI-generated mockups that drive local business calls.",
    url: "https://print.atonomi.ai",
    siteName: "atonomi",
    type: "website",
    images: [
      {
        url: "/assets/postcard-hero.png",
        width: 1200,
        height: 675,
        alt: "atonomi — personalized postcard system for print shops",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "atonomi | AI-Powered Direct Mail for Print Shops",
    description:
      "Automate your B2B sales. Send personalized postcards with AI-generated mockups that drive local business calls.",
    images: ["/assets/postcard-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col mesh-gradient text-charcoal">
        <PostHogProvider>
          <Navbar />
          {children}
          <Analytics />
        </PostHogProvider>
      </body>
    </html>
  );
}

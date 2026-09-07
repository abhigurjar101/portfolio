import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Abhishek Gurjar — AI/ML Engineer · Data Analyst · Python & Growth Architect",
  description:
    "AI/ML Engineer, Data Analyst, and Full Stack Python Developer with an Executive Diploma from IIIT-Bangalore and Master's from LJMU (UK). Experienced in AI systems, SQL data warehouses, backend design, marketing analytics, and client solutions.",
  keywords: [
    "AI/ML Engineer",
    "Data Analyst",
    "Python Developer",
    "Marketing Analytics",
    "SEO Strategist",
    "Client Solutions Architect",
    "System Design",
    "Machine Learning",
    "SQL Warehousing",
    "GraphRAG",
    "Local LLMs",
    "AWS Cloud",
  ],
  authors: [{ name: "Abhishek Gurjar", url: "https://github.com/abhigurjar101" }],
  openGraph: {
    title: "Abhishek Gurjar — AI/ML Engineer · Data Analyst · Python & Growth Architect",
    description: "Bridging intelligent AI algorithms with real-world business growth, data analytics, and clean backend architecture.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased noise-bg`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}

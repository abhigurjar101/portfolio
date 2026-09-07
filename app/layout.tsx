import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Abhishek Gurjar — Senior Gen AI Engineer",
  description:
    "Senior Gen AI Engineer specializing in RAG, Advanced RAG, LLMs, Knowledge Graphs, AI Agents, Backend Engineering, and AWS Cloud.",
  keywords: [
    "Gen AI Engineer",
    "RAG",
    "Advanced RAG",
    "LLM",
    "Machine Learning",
    "Knowledge Graph",
    "AI Agents",
    "Python",
    "AWS",
    "Backend Engineer",
  ],
  authors: [{ name: "Abhishek Gurjar", url: "https://github.com/abhigurjar101" }],
  openGraph: {
    title: "Abhishek Gurjar — Senior Gen AI Engineer",
    description: "Building production-grade Generative AI systems and intelligent RAG pipelines.",
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

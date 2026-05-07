import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Candidate Skill Gap Analyzer",
  description: "Identify skill gaps between job requirements and candidates. AI-powered analysis for hiring managers and HR teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2508cb09-8cb2-42d9-a04a-4d93f8dc5871"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}

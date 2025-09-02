import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learnary",
  description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{variables:{colorPrimary:"#1E3A8A"}}}>
      <html lang="en">
        <body className={`${bricolage.variable} antialiased`}>
          <div className="min-h-screen w-full relative overflow-hidden">
            <div
              className="fixed inset-0 z-0 pointer-events-none"
              style={{
                backgroundImage:
                  `linear-gradient(to right, #f0f0f0 1px, transparent 1px),`+
                  `linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),`+
                  `radial-gradient(circle 600px at 0% 200px, #d5c5ff, transparent),`+
                  `radial-gradient(circle 600px at 100% 200px, #d5c5ff, transparent)`,
                backgroundSize: "20px 20px, 20px 20px, 100% 100%, 100% 100%",
                backgroundAttachment: "fixed, fixed, fixed, fixed",
              }}
            />
            <div className="relative z-10">
              <Navbar />
              {children}
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}

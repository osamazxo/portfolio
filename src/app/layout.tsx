import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/ui/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Osama Safwat | Full Stack Developer",
  description: `I'm a passionate and dedicated full-stack web developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). With extensive experience in both front-end and back-end development, I have a proven track record of building robust, scalable, and high-performance web applications.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

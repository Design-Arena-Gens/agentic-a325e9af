import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "FlowForge Automation",
  description: "Automation agency for small and medium manufacturing industries."
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}

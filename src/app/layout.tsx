import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Chat from "@/components/Chat";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });
const inter2 = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduBot",
  description: "Chatgpt api Automation for Institution",
};

export default function RootLayout({
  children,
  children2,
}: Readonly<{
  children: React.ReactNode;
  children2: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter2.className}>
        <Chat />
        {children2}
      </body>
      <Providers>
        <body className={inter.className}>
          <Chat />
          {children}
        </body>
      </Providers>
    </html>
  );
}

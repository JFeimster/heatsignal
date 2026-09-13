import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const metadata: Metadata = {
  title: { default: "AFTERDARK — Good stories for bad hours", template: "%s — AFTERDARK" },
  description: "A visually seductive, intelligent after-hours publication about desire, people, nightlife and the internet.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/component/common/header";
import Footer from "@/component/common/footer";
import JumboTron from "@/component/common/jumboTron";

export const metadata: Metadata = {
  title: "최화재 이력서",
  description: "휘황찬란한 말이 아니라 만든 것과 경험으로 증명하는 개발자가 되고 싶습니다.",
  icons: {
    icon: '/favicon.png'
  }
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  width: 'device-width',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scrollbar-hide touch-pan-y touch-pinch-zoom">
      <body className="flex flex-col bg-white ">
        <Header />
        <JumboTron />
        {children}
        <Footer />
      </body>
    </html>
  );
}

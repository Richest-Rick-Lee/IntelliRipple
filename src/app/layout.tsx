import React from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IntelliRipple",
  description: "IntelliRipple · 智能涟漪企业解决方案官网",
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="page-root">
        <div className="page-ripples">
          <div className="page-ripple-orb page-ripple-orb-left">
            <div className="ripple-bg-circle" />
            <div className="ripple-ring" />
            <div className="ripple-ring layer2" />
            <div className="ripple-ring layer3" />
            <div className="ripple-ring layer4" />
          </div>
          <div className="page-ripple-orb page-ripple-orb-right">
            <div className="ripple-bg-circle" />
            <div className="ripple-ring" />
            <div className="ripple-ring layer2" />
            <div className="ripple-ring layer3" />
            <div className="ripple-ring layer4" />
          </div>
          <div className="page-ripple-orb page-ripple-orb-bottom-left">
            <div className="ripple-bg-circle" />
            <div className="ripple-ring" />
            <div className="ripple-ring layer2" />
            <div className="ripple-ring layer3" />
            <div className="ripple-ring layer4" />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}


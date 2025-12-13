"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header className="nav-blur">
        <div className="nav-inner">
          <Link href="/" className="logo">
            <Image src="/logo.png" alt="IntelliRipple Logo" width={48} height={48} className="logo-img" />
            <div className="logo-text-main">
              <div className="logo-intelli-ripple">
                <span className="logo-intelli">Intelli</span>
                <span className="logo-ripple">Ripple</span>
              </div>
              <div className="logo-sub-cn">灵漪科技</div>
            </div>
          </Link>
          <nav className="nav-links">
            <Link className="nav-link" href="/">
              首页
            </Link>
            <Link className="nav-link" href="/about">
              关于我们
            </Link>
            <Link className="nav-link" href="/products">
              产品介绍
            </Link>
            <Link className="nav-link" href="/culture">
              创新文化
            </Link>
            <Link className="nav-link" href="/contact">
              联系我们
            </Link>
          </nav>
        </div>
      </header>
      <div className="subpage-root">
        <main>
          <section className="hero">
            <div className="hero-inner">
              <div>
                <h1 className="hero-title">
                  欢迎来到 <span className="hero-title-gradient">IntelliRipple</span>
                </h1>
                <p className="hero-desc">
                  IntelliRipple（灵漪科技）致力于用 AI 驱动的数据智能和自动化能力，重构企业的业务决策与运营方式。
                  我们围绕全球化社交生态与智能招聘场景，打造了一系列融合 AI、数据智能与产品体验的创新产品。
                </p>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer">
          <div className="footer-inner">
            <span>©海口灵漪科技有限公司 2026 版权所有</span>
          </div>
        </footer>
      </div>
    </>
  );
}

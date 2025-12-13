 "use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function CulturePage() {
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
                  创新文化 <span className="hero-title-gradient">Innovation by Design</span>
                </h1>
                <p className="hero-desc">
                  我们相信，技术创新的真正价值在于被「用起来」。IntelliRipple 的每一次产品演进，
                  都源自真实业务场景与一线用户需求的持续碰撞。
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



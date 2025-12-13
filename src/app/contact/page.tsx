 "use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function ContactPage() {
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
                  联系我们 <span className="hero-title-gradient">Connect with IntelliRipple</span>
                </h1>
                <p className="hero-desc">
                  如需产品演示、技术对接或合作洽谈，欢迎通过邮箱或电话与我们联系，我们将尽快与您取得联系。
                </p>
              </div>
            </div>
          </section>
          <section className="products-section">
            <article className="product-card">
              <div className="product-meta">
                <h2 className="product-title">联系方式</h2>
              </div>
              <p className="hero-desc" style={{ marginTop: "0.8rem", whiteSpace: "pre-line" }}>
                电话：+86 18800110365{"\n\n"}
                邮箱：intelliripple@gmail.com{"\n\n"}
                地址：海南省海口市美兰区蓝天街道国兴大道11号国瑞大厦C座东塔14层1402-40室
              </p>
            </article>
            <article className="product-card">
              <div className="product-meta">
                <h2 className="product-title">工作时间</h2>
              </div>
              <p className="hero-desc" style={{ marginTop: "0.8rem", whiteSpace: "pre-line" }}>
                周一至周五：9:00 - 18:00{"\n\n"}
                周六：10:00 - 16:00{"\n\n"}
                周日：休息
              </p>
            </article>
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



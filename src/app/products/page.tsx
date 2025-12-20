"use client";

import { useEffect } from "react";
import Image from "next/image";
import Nav from "../components/Nav";

export default function ProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav />
      <div className="subpage-root">
        <main>
          <section className="hero">
            <div className="hero-inner">
              <div className="products-hero-text">
                <h1 className="hero-title">
                  体验我们精心打造的产品和服务 <span className="hero-title-gradient">Products</span>
                </h1>
                <p className="hero-desc">
                  我们围绕全球化社交生态与智能招聘场景，打造了一系列融合 AI、数据智能与产品体验的创新产品，满足多元业务场景。
                </p>
              </div>
            </div>
          </section>
          <section className="products-section">
            <article className="product-card">
              <div className="product-image-wrapper">
                <Image
                  src="/products/fubowave.png"
                  alt="FuboWave 社交生态平台"
                  width={640}
                  height={240}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <div className="product-meta">
                <h2 className="product-title">FuboWave 社交生态平台</h2>
                <span className="product-tag">社交生态</span>
              </div>
              <div className="card-sub">
                <p className="card-sub-text">
                  FuboWave 是一款新一代全球内容社交平台，集「内容创作 + 多语言交流 + 模块算法 + AI 驱动社区互动」于一体。
                  平台支持贴文、图片、视频、直播、问答、调查、动态数据流等多种内容形式，未来还将整合电商、支付、二手交易、旅游、
                  本地生活、求职招聘和 IM 通讯等平台，形成多维社交生态闭环。
                </p>
                <p className="card-sub-text" style={{ marginTop: "0.6rem" }}>
                  通过多语言实时翻译功能，打破语言障碍；采用模块化推荐算法，让算法透明可控，打破信息茧房；
                  通过 AI 智能代理技术，用户可以轻松管理账号、过滤内容、发布动态。
                </p>
              </div>
            </article>
            <article className="product-card">
              <div className="product-image-wrapper">
                <Image
                  src="/products/bolevalley.png"
                  alt="BoleValley 社交招聘平台"
                  width={640}
                  height={240}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <div className="product-meta">
                <h2 className="product-title">BoleValley 社交招聘平台</h2>
                <span className="product-tag">社交招聘</span>
              </div>
              <div className="card-sub">
                <p className="card-sub-text">
                  BoleValley 是一款 AI 驱动的求职招聘平台，通过大数据技术精准匹配人才与职位。平台采用 AI 面试官系统，
                  自动发起面试流程，大大缩短招聘周期；内置智能面试辅助工具，帮助面试官进行更精准的能力评估和职位匹配。
                </p>
                <p className="card-sub-text" style={{ marginTop: "0.6rem" }}>
                  为求职者提供一键面试总结功能，并智能推荐相关学习内容，实现求职与技能提升的完美结合，打造更高效的招聘生态系统。
                </p>
              </div>
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



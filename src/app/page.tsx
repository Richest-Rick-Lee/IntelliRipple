"use client";

import { useEffect } from "react";
import Nav from "./components/Nav";

export default function HomePage() {
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
              <div>
                <h1 className="hero-title">
                  创新激起智能涟漪 <span className="hero-title-gradient">IntelliRipple</span>
                </h1>
                <p className="hero-desc">
                  IntelliRipple（灵漪科技）致力于用 AI 驱动的数据智能和自动化能力，成为全球领先的、AI原生的社交生态操作系统，成为用户探索世界和连接彼此的首选平台。
                </p>
              </div>
            </div>
          </section>
          <section className="products-section">
            <article className="product-card">
              <div className="product-meta">
                <h2 className="product-title">What We Build｜我们在构建什么</h2>
              </div>
              <div className="card-sub">
                <p className="card-sub-text" style={{ whiteSpace: "pre-line" }}>
                  IntelliRipple 打造以「个人 AI」为核心的智能社交生态。{"\n\n"}
                  ● 每位用户拥有专属个人 AI{"\n"}
                  ● AI 理解用户习惯、偏好、风格与决策逻辑{"\n"}
                  ● 通过自然语言完成高频任务与服务调用{"\n"}
                  ● AI 之间可在安全协议下协作，持续进化整体智能{"\n\n"}
                  我们不是单一应用，而是 面向未来的智能基础层。
                </p>
              </div>
            </article>
            <article className="product-card">
              <div className="product-meta">
                <h2 className="product-title">Why Now｜为什么是现在</h2>
              </div>
              <div className="card-sub">
                <p className="card-sub-text" style={{ whiteSpace: "pre-line" }}>
                  AI 正在从“工具时代”进入“个体智能时代”。{"\n\n"}
                  ● 大模型能力成熟，自然语言成为主流交互方式{"\n"}
                  ● 用户开始需要“长期记忆 + 个性化理解”的 AI{"\n"}
                  ● 社交、购物、支付、生活、旅游等服务场景正在被 AI 重构{"\n"}
                  ● 隐私、安全与算法透明成为全球共识{"\n\n"}
                  个人 AI，正在成为新的平台级入口。
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

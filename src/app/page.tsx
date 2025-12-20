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
                <div className="card-sub-content">
                  <p className="card-sub-text" style={{ whiteSpace: "pre-line" }}>
                    IntelliRipple 打造以「个人 AI」为核心的智能社交生态。{"\n\n"}
                    <span className="star-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="homeStarGradient2" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#38bdf8" />
                            <stop offset="0.5" stopColor="#6366f1" />
                            <stop offset="1" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#homeStarGradient2)" />
                      </svg>
                    </span>
                    每位用户拥有专属个人 AI{"\n"}
                    <span className="star-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="homeStarGradient3" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#38bdf8" />
                            <stop offset="0.5" stopColor="#6366f1" />
                            <stop offset="1" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#homeStarGradient3)" />
                      </svg>
                    </span>
                    AI 理解用户习惯、偏好、风格与决策逻辑{"\n"}
                    <span className="star-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="homeStarGradient4" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#38bdf8" />
                            <stop offset="0.5" stopColor="#6366f1" />
                            <stop offset="1" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#homeStarGradient4)" />
                      </svg>
                    </span>
                    通过自然语言完成高频任务与服务调用{"\n"}
                    <span className="star-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="homeStarGradient5" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#38bdf8" />
                            <stop offset="0.5" stopColor="#6366f1" />
                            <stop offset="1" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#homeStarGradient5)" />
                      </svg>
                    </span>
                    AI 之间可在安全协议下协作，持续进化整体智能{"\n"}
                    <span className="star-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="homeStarGradient6" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#38bdf8" />
                            <stop offset="0.5" stopColor="#6366f1" />
                            <stop offset="1" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#homeStarGradient6)" />
                      </svg>
                    </span>
                    AI 驱动平台扩展，促进跨行业整合，为用户创造更多智能应用场景{"\n\n"}
                    我们不是单一应用，而是 面向未来的智能基础层。
                  </p>
                </div>
              </div>
            </article>
            <article className="product-card">
              <div className="product-meta">
                <h2 className="product-title">Why Now｜为什么是现在</h2>
              </div>
              <div className="card-sub">
                <div className="card-sub-content">
                  <p className="card-sub-text" style={{ whiteSpace: "pre-line" }}>
                    AI 正在从"工具时代"进入"个体智能时代"。{"\n\n"}
                    <span className="star-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="homeStarGradient8" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#38bdf8" />
                            <stop offset="0.5" stopColor="#6366f1" />
                            <stop offset="1" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#homeStarGradient8)" />
                      </svg>
                    </span>
                    大模型能力成熟，自然语言成为主流交互方式{"\n"}
                    <span className="star-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="homeStarGradient9" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#38bdf8" />
                            <stop offset="0.5" stopColor="#6366f1" />
                            <stop offset="1" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#homeStarGradient9)" />
                      </svg>
                    </span>
                    用户开始需要"长期记忆 + 个性化理解"的 AI{"\n"}
                    <span className="star-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="homeStarGradient11" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#38bdf8" />
                            <stop offset="0.5" stopColor="#6366f1" />
                            <stop offset="1" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#homeStarGradient11)" />
                      </svg>
                    </span>
                    隐私、安全与算法透明成为全球共识{"\n"}
                    <span className="star-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="homeStarGradient10" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#38bdf8" />
                            <stop offset="0.5" stopColor="#6366f1" />
                            <stop offset="1" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#homeStarGradient10)" />
                      </svg>
                    </span>
                    社交、购物、生活、旅游等服务场景正在被 AI 重构{"\n"}
                    <span className="star-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="homeStarGradient12" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#38bdf8" />
                            <stop offset="0.5" stopColor="#6366f1" />
                            <stop offset="1" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#homeStarGradient12)" />
                      </svg>
                    </span>
                    AI 作为平台的中心，促进不同生态系统和应用间的交互，推动跨平台发展{"\n\n"}
                    个人 AI，正在成为新的平台级入口。
                  </p>
                </div>
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

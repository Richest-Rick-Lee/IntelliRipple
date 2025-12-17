 "use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function AboutPage() {
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
              Prajna
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
                  了解我们的企业文化 <span className="hero-title-gradient">Corporate Culture</span>
                </h1>
                <p className="hero-desc">
                  IntelliRipple致力于用 AI 驱动的数据智能和自动化能力，重构企业的业务决策与运营方式。
                </p>
              </div>
            </div>
          </section>
          <section className="about-sections">
            {/* 公司简介 - 单独一行居中 */}
            <article className="about-card about-card-full">
              <h2 className="about-card-title">公司简介（Company Profile）</h2>
              <div className="about-single-sub">
                <div className="about-sub-card">
                  <p className="about-sub-card-text">
                    IntelliRipple（灵漪科技） 是一家以人工智能与社交技术为核心驱动力的全球化科技公司，致力于通过 AI 与社交平台的深度融合，构建一个
                    “人人可用、人人智能” 的新一代全球数字生态。我们希望让 AI 真正成为社交的中枢神经，让智能社交服务触达每一位用户。我们坚信，智能不应是高高在上的技术孤岛，而应像涟漪一样，从中心扩散，触达世界的每一个角落。
                  </p>
                  <p className="about-sub-card-text" style={{ marginTop: "0.6rem" }}>
                    IntelliRipple 致力于打造以「个人 AI」为中心的智能生态系统，通过安全可信的数据体系、可控透明的算法机制，以及 AI 之间协同进化的能力，让每一位用户都拥有真正属于自己的AI。我们相信，真正有价值的 AI，不是冰冷的工具，而是能够理解个体、连接群体、服务生活的智能伙伴。我们正在构建一个可指数级扩展的智能网络，个人 AI 将成为下一代超级入口。
                  </p>
                </div>
              </div>
            </article>

            {/* 使命和愿景 - 左右排列 */}
            <div className="about-mission-vision">
              <article className="about-card">
                <div className="about-card-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient
                        id="aboutMissionGradient"
                        x1="4"
                        y1="2"
                        x2="20"
                        y2="22"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#38bdf8" />
                        <stop offset="0.5" stopColor="#6366f1" />
                        <stop offset="1" stopColor="#f97316" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M12 2c2.21 0 4 1.79 4 4v1.5l2 .5-2 5.5v6L12 22l-4-2.5v-6l-2-5.5 2-.5V6c0-2.21 1.79-4 4-4Zm0 2c-1.1 0-2 .9-2 2v1.1L9.2 7.3l-.3.1-.95.25.95 2.65H10v6.3l2 1.25 2-1.25v-6.3h1.1l.95-2.65-.95-.25-.3-.1L14 7.1V6c0-1.1-.9-2-2-2Z"
                      fill="url(#aboutMissionGradient)"
                    />
                  </svg>
                </div>
                <h2 className="about-card-title">使命（Mission）</h2>
                <div className="about-single-sub">
                  <div className="about-sub-card">
                    <h3 className="about-sub-card-title">我们的使命</h3>
                    <p className="about-sub-card-text">
                      构建全球首个“人机共生”的无界智能生态，让世界不仅可沟通，更可触手可及。通过 AI 赋能至各个热门平台，形成一个完整的智能生态系统。让 AI 真正成为社交的中枢神经，让智能社交与数字生活服务于全球用户。
                    </p>
                  </div>
                </div>
              </article>
              <article className="about-card">
                <div className="about-card-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient
                        id="aboutVisionGradient"
                        x1="2"
                        y1="4"
                        x2="22"
                        y2="18"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#38bdf8" />
                        <stop offset="0.5" stopColor="#6366f1" />
                        <stop offset="1" stopColor="#f97316" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M12 4c-4.5 0-8.4 2.9-10 7 1.6 4.1 5.5 7 10 7s8.4-2.9 10-7c-1.6-4.1-5.5-7-10-7Zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Z"
                      fill="url(#aboutVisionGradient)"
                    />
                  </svg>
                </div>
                <h2 className="about-card-title">愿景（Vision）</h2>
                <div className="about-single-sub">
                  <div className="about-sub-card">
                    <h3 className="about-sub-card-title">我们的愿景</h3>
                    <p className="about-sub-card-text">
                      成为全球领先的 AI 驱动型社交生态系统的构建者，重新定义人们发现内容、连接彼此和互动的方式。打造一个“多语言无界社交宇宙”，让每个用户都能跨越语言与文化边界，自由交流与创作。
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* 核心价值观 - 带6个子窗 */}
            <article className="about-card about-card-full">
              <h2 className="about-card-title">核心价值观（Core Values）</h2>
              <div className="about-sub-cards">
                <div className="about-sub-card">
                  <h3 className="about-sub-card-title">
                    <span className="about-sub-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient
                            id="aboutCoreGradient1"
                            x1="4"
                            y1="4"
                            x2="20"
                            y2="20"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#38bdf8" />
                            <stop offset="0.5" stopColor="#6366f1" />
                            <stop offset="1" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                          fill="url(#aboutCoreGradient1)"
                        />
                      </svg>
                    </span>以人为本
                  </h3>
                  <p className="about-sub-card-text">反对算法至上，技术服务于人，而非技术绑架。</p>
                </div>
                <div className="about-sub-card">
                  <h3 className="about-sub-card-title">
                    <span className="about-sub-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient
                            id="aboutCoreGradient2"
                            x1="4"
                            y1="3"
                            x2="20"
                            y2="21"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#38bdf8" />
                            <stop offset="0.5" stopColor="#6366f1" />
                            <stop offset="1" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
                          fill="url(#aboutCoreGradient2)"
                        />
                      </svg>
                    </span>尊重隐私
                  </h3>
                  <p className="about-sub-card-text">抵制数据掠夺，隐私不是成本，而是底线。</p>
                </div>
                <div className="about-sub-card">
                  <h3 className="about-sub-card-title">
                    <span className="about-sub-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient
                            id="aboutCoreGradient3"
                            x1="3"
                            y1="2"
                            x2="21"
                            y2="22"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#38bdf8" />
                            <stop offset="0.5" stopColor="#6366f1" />
                            <stop offset="1" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.32 1.25-.78 2.45-1.38 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2 0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08c.12-1.25.37-2.45.75-3.56C6.6 5.89 7.06 7.09 7.38 8.36M5.08 16H8c-.32 1.25-.78 2.45-1.38 3.56-.38-1.11-.63-2.31-.75-3.56M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95c-.32-1.25-.78-2.45-1.38-3.56.38-1.11.63-2.31.75-3.56h2.95c-.12 1.25-.37 2.45-.75 3.56-.6 1.11-1.06 2.31-1.38 3.56M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                          fill="url(#aboutCoreGradient3)"
                        />
                      </svg>
                    </span>开放协作
                  </h3>
                  <p className="about-sub-card-text">反对封闭垄断，让智能在连接中不断进化。</p>
                </div>
                <div className="about-sub-card">
                  <h3 className="about-sub-card-title">
                    <span className="about-sub-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient
                            id="aboutCoreGradient4"
                            x1="6"
                            y1="2"
                            x2="20"
                            y2="22"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#38bdf8" />
                            <stop offset="0.5" stopColor="#6366f1" />
                            <stop offset="1" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"
                          fill="url(#aboutCoreGradient4)"
                        />
                      </svg>
                    </span>持续创新
                  </h3>
                  <p className="about-sub-card-text">以创新作为驱动力，解决用户痛点，打造大众创新的企业文化。</p>
                </div>
                <div className="about-sub-card">
                  <h3 className="about-sub-card-title">
                    <span className="about-sub-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient
                            id="aboutCoreGradient5"
                            x1="0"
                            y1="2"
                            x2="24"
                            y2="22"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#38bdf8" />
                            <stop offset="0.5" stopColor="#6366f1" />
                            <stop offset="1" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M4 10v8l8 4 8-4v-8"
                          stroke="url(#aboutCoreGradient5)"
                          strokeWidth="1.3"
                          strokeLinejoin="round"
                          fill="none"
                          opacity="0.9"
                        />
                        <path
                          d="M4 10l8 4 8-4"
                          stroke="url(#aboutCoreGradient5)"
                          strokeWidth="1.3"
                          strokeLinejoin="round"
                          opacity="0.9"
                        />
                        <path
                          d="M12 14v8"
                          stroke="url(#aboutCoreGradient5)"
                          strokeWidth="1.3"
                          opacity="0.9"
                        />
                        <path
                          d="M0 6l4 4 8-4"
                          stroke="url(#aboutCoreGradient5)"
                          strokeWidth="1.3"
                          strokeLinejoin="round"
                          fill="none"
                          opacity="0.9"
                        />
                        <path
                          d="M0 6l4-4 8 4"
                          stroke="url(#aboutCoreGradient5)"
                          strokeWidth="1.3"
                          strokeLinejoin="round"
                          fill="none"
                          opacity="0.9"
                        />
                        <path
                          d="M24 6l-4 4-8-4"
                          stroke="url(#aboutCoreGradient5)"
                          strokeWidth="1.3"
                          strokeLinejoin="round"
                          fill="none"
                          opacity="0.9"
                        />
                        <path
                          d="M24 6l-4-4-8 4"
                          stroke="url(#aboutCoreGradient5)"
                          strokeWidth="1.3"
                          strokeLinejoin="round"
                          fill="none"
                          opacity="0.9"
                        />
                        <path
                          d="M4 2l8 4 8-4"
                          stroke="url(#aboutCoreGradient5)"
                          strokeWidth="1.3"
                          strokeLinejoin="round"
                          fill="none"
                          opacity="0.9"
                        />
                        <path
                          d="M4 10l8-4 8 4"
                          stroke="url(#aboutCoreGradient5)"
                          strokeWidth="1.3"
                          strokeLinejoin="round"
                          fill="none"
                          opacity="0.9"
                        />
                      </svg>
                    </span>真实透明
                  </h3>
                  <p className="about-sub-card-text">打破信息茧房，拥抱真实，反对算法操纵与信息不对称。</p>
                </div>
                <div className="about-sub-card">
                  <h3 className="about-sub-card-title">
                    <span className="about-sub-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient
                            id="aboutCoreGradient6"
                            x1="4"
                            y1="4"
                            x2="20"
                            y2="20"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#38bdf8" />
                            <stop offset="0.5" stopColor="#6366f1" />
                            <stop offset="1" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                        <circle cx="12" cy="12" r="10" stroke="url(#aboutCoreGradient6)" strokeWidth="1.5" fill="none" opacity="0.9"/>
                        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="url(#aboutCoreGradient6)" strokeWidth="1.5" fill="none" opacity="0.9"/>
                        <circle cx="12" cy="12" r="2" fill="url(#aboutCoreGradient6)" opacity="0.9"/>
                      </svg>
                    </span>全球视野
                  </h3>
                  <p className="about-sub-card-text">打破语言巴别塔，推倒信息围墙，语言无界，地域无界，服务无界。</p>
                </div>
              </div>
            </article>

            {/* 行为准则 - 带6个子窗 */}
            <article className="about-card about-card-full">
              <h2 className="about-card-title">行为准则（Code of Conduct）</h2>
              <div className="about-sub-cards">
                <div className="about-sub-card">
                  <h3 className="about-sub-card-title">
                    <span className="about-sub-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient
                            id="aboutConductGradient1"
                            x1="2"
                            y1="2"
                            x2="22"
                            y2="22"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#38bdf8" />
                            <stop offset="0.5" stopColor="#6366f1" />
                            <stop offset="1" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="url(#aboutConductGradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9"/>
                        <circle cx="12" cy="7" r="1.5" fill="url(#aboutConductGradient1)" opacity="0.9"/>
                        <circle cx="12" cy="12" r="1.5" fill="url(#aboutConductGradient1)" opacity="0.9"/>
                        <circle cx="12" cy="17" r="1.5" fill="url(#aboutConductGradient1)" opacity="0.9"/>
                      </svg>
                    </span>用户主权
                  </h3>
                  <p className="about-sub-card-text">我们坚持用户对数据的完全控制权，用户是平台的主人，不是流量的奴隶。任何功能的开发都应以"增强用户能力"为前提，而不是"消耗用户时间"。</p>
                </div>
                <div className="about-sub-card">
                  <h3 className="about-sub-card-title">
                    <span className="about-sub-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient
                            id="aboutConductGradient2"
                            x1="4"
                            y1="2"
                            x2="20"
                            y2="22"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#38bdf8" />
                            <stop offset="0.5" stopColor="#6366f1" />
                            <stop offset="1" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                        <path d="M12 2L4 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-8-3z" fill="url(#aboutConductGradient2)" opacity="0.9"/>
                        <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </span>数据安全
                  </h3>
                  <p className="about-sub-card-text">不出售、不交换、不滥用任何用户隐私数据、信息操纵或灰色变现，持续自我审查与安全审计，保护用户的数据安全就是守护我们的生命线。</p>
                </div>
                <div className="about-sub-card">
                  <h3 className="about-sub-card-title">
                    <span className="about-sub-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient
                            id="aboutConductGradient3"
                            x1="4"
                            y1="2"
                            x2="22"
                            y2="22"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#38bdf8" />
                            <stop offset="0.5" stopColor="#6366f1" />
                            <stop offset="1" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="url(#aboutConductGradient3)" opacity="0.9"/>
                      </svg>
                    </span>开放连接
                  </h3>
                  <p className="about-sub-card-text">我们坚持在安全与合规前提下，保持生态开放性。开放不是失控，而是通过规则化接口实现规模增长。真正的强大，来自连接，而非封闭。</p>
                </div>
                <div className="about-sub-card">
                  <h3 className="about-sub-card-title">
                    <span className="about-sub-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient
                            id="aboutConductGradient4"
                            x1="4"
                            y1="2"
                            x2="22"
                            y2="22"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#38bdf8" />
                            <stop offset="0.5" stopColor="#6366f1" />
                            <stop offset="1" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                        <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z" fill="url(#aboutConductGradient4)" opacity="0.9"/>
                        <path d="M12 6l1.5 4.5L18 12l-4.5 1.5L12 18l-1.5-4.5L6 12l4.5-1.5L12 6z" fill="url(#aboutConductGradient4)" opacity="0.6"/>
                        <circle cx="12" cy="12" r="1.5" fill="url(#aboutConductGradient4)" opacity="0.9"/>
                      </svg>
                    </span>大众创新
                  </h3>
                  <p className="about-sub-card-text">创新不应只属于少数人，鼓励用户参与产品、算法与生态共建，形成持续自增强的创新飞轮。尊重来自社区的创意、经验与反馈，技术的价值，在于被更多人真正用上。</p>
                </div>
                <div className="about-sub-card">
                  <h3 className="about-sub-card-title">
                    <span className="about-sub-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient
                            id="aboutConductGradient5"
                            x1="4"
                            y1="3"
                            x2="22"
                            y2="21"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#38bdf8" />
                            <stop offset="0.5" stopColor="#6366f1" />
                            <stop offset="1" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                          fill="url(#aboutConductGradient5)"
                        />
                      </svg>
                    </span>技术向善
                  </h3>
                  <p className="about-sub-card-text">技术本身中立，但使用方向必须有价值判断。鼓励技术向善，反对技术霸权，我们坚持透明算法、用户可控、意图对齐的设计原则，反对信息操纵与算法黑箱。</p>
                </div>
                <div className="about-sub-card">
                  <h3 className="about-sub-card-title">
                    <span className="about-sub-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient
                            id="aboutConductGradient6"
                            x1="4"
                            y1="2"
                            x2="22"
                            y2="22"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#38bdf8" />
                            <stop offset="0.5" stopColor="#6366f1" />
                            <stop offset="1" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                        <path d="M12 2L10 8h4l-2-6z" fill="url(#aboutConductGradient6)" opacity="0.9"/>
                        <path d="M8 8h8l-1 4H9l-1-4z" fill="url(#aboutConductGradient6)" opacity="0.9"/>
                        <path d="M10 12h4l-1 4h-2l-1-4z" fill="url(#aboutConductGradient6)" opacity="0.9"/>
                        <path d="M12 18v4M9 20h6" stroke="url(#aboutConductGradient6)" strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/>
                      </svg>
                    </span>生态共荣
                  </h3>
                  <p className="about-sub-card-text">万物互联，多方共赢。 从社交到电商，从学习到生活，我们在平台内构建闭环。我们尊重每一位创作者、合作伙伴和普通用户，致力于让每个角色都能在这个生态中找到价值。</p>
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



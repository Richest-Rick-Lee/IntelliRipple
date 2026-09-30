"use client";

import { useEffect } from "react";
import Nav from "../components/Nav";
import { useI18n } from "../../i18n/LanguageContext";

export default function AboutPage() {
  const { t } = useI18n();

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
                  {t.about.title} <span className="hero-title-gradient">{t.about.titleHighlight}</span>
                </h1>
                <p className="hero-desc">
                  {t.about.desc}
                </p>
              </div>
            </div>
          </section>
          <section className="about-sections">
            {/* 公司简介 - 单独一行居中 */}
            <article className="about-card about-card-full">
              <h2 className="about-card-title">{t.about.profileTitle}</h2>
              <div className="about-single-sub">
                <div className="about-sub-card">
                  <p className="about-sub-card-text">{t.about.profileP1}</p>
                  <p className="about-sub-card-text" style={{ marginTop: "0.6rem" }}>{t.about.profileP2}</p>
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
                <h2 className="about-card-title">{t.about.missionTitle}</h2>
                <div className="about-single-sub">
                  <div className="about-sub-card">
                    <h3 className="about-sub-card-title">{t.about.missionSub}</h3>
                    <p className="about-sub-card-text">{t.about.missionText}</p>
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
                <h2 className="about-card-title">{t.about.visionTitle}</h2>
                <div className="about-single-sub">
                  <div className="about-sub-card">
                    <h3 className="about-sub-card-title">{t.about.visionSub}</h3>
                    <p className="about-sub-card-text">{t.about.visionText}</p>
                  </div>
                </div>
              </article>
            </div>

            {/* 核心价值观 - 带6个子窗 */}
            <article className="about-card about-card-full">
              <h2 className="about-card-title">{t.about.valuesTitle}</h2>
              <div className="about-sub-cards about-core-values-cards">
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
                    </span>{t.about.values[0].title}
                  </h3>
                  <p className="about-sub-card-text">{t.about.values[0].text}</p>
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
                    </span>{t.about.values[1].title}
                  </h3>
                  <p className="about-sub-card-text">{t.about.values[1].text}</p>
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
                    </span>{t.about.values[2].title}
                  </h3>
                  <p className="about-sub-card-text">{t.about.values[2].text}</p>
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
                    </span>{t.about.values[3].title}
                  </h3>
                  <p className="about-sub-card-text">{t.about.values[3].text}</p>
                </div>
                <div className="about-sub-card">
                  <h3 className="about-sub-card-title">
                    <span className="about-sub-icon">
                      <svg className="about-open-box-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient
                            id="aboutCoreGradient5"
                            x1="2"
                            y1="3"
                            x2="22"
                            y2="20"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#38bdf8" />
                            <stop offset="0.5" stopColor="#6366f1" />
                            <stop offset="1" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                        <path d="M6.5 10.6 12 7.8 9.2 3.6 3.7 6.4Z" fill="url(#aboutCoreGradient5)" opacity="0.62" />
                        <path d="M12 7.8 17.5 10.6 20.3 6.4 14.8 3.6Z" fill="url(#aboutCoreGradient5)" opacity="0.48" />
                        <path d="M6.5 10.6 12 13.4 12 18.8 6.5 16Z" fill="url(#aboutCoreGradient5)" opacity="0.95" />
                        <path d="M17.5 10.6 12 13.4 12 18.8 17.5 16Z" fill="url(#aboutCoreGradient5)" opacity="0.7" />
                        <path d="M6.5 10.6 12 7.8 12 10.4 8.6 11.8Z" fill="url(#aboutCoreGradient5)" opacity="0.4" />
                        <path d="M12 7.8 17.5 10.6 15.4 11.8 12 10.4Z" fill="url(#aboutCoreGradient5)" opacity="0.3" />
                        <path d="M8.6 11.8 12 10.4 15.4 11.8 12 13Z" fill="url(#aboutCoreGradient5)" opacity="0.58" />
                        <path d="M12 13.4 6.5 10.6 3.7 13.6 9.2 16.4Z" fill="url(#aboutCoreGradient5)" />
                        <path d="M17.5 10.6 12 13.4 14.8 16.4 20.3 13.6Z" fill="url(#aboutCoreGradient5)" opacity="0.8" />
                      </svg>
                    </span>{t.about.values[4].title}
                  </h3>
                  <p className="about-sub-card-text">{t.about.values[4].text}</p>
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
                    </span>{t.about.values[5].title}
                  </h3>
                  <p className="about-sub-card-text">{t.about.values[5].text}</p>
                </div>
              </div>
            </article>

            {/* 行为准则 - 带6个子窗 */}
            <article className="about-card about-card-full">
              <h2 className="about-card-title">{t.about.conductTitle}</h2>
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
                    </span>{t.about.conducts[0].title}
                  </h3>
                  <p className="about-sub-card-text">{t.about.conducts[0].text}</p>
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
                    </span>{t.about.conducts[1].title}
                  </h3>
                  <p className="about-sub-card-text">{t.about.conducts[1].text}</p>
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
                    </span>{t.about.conducts[2].title}
                  </h3>
                  <p className="about-sub-card-text">{t.about.conducts[2].text}</p>
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
                    </span>{t.about.conducts[3].title}
                  </h3>
                  <p className="about-sub-card-text">{t.about.conducts[3].text}</p>
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
                    </span>{t.about.conducts[4].title}
                  </h3>
                  <p className="about-sub-card-text">{t.about.conducts[4].text}</p>
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
                    </span>{t.about.conducts[5].title}
                  </h3>
                  <p className="about-sub-card-text">{t.about.conducts[5].text}</p>
                </div>
              </div>
            </article>
          </section>
        </main>
        <footer className="footer">
          <div className="footer-inner">
            <span>{t.footer.copyright}</span>
          </div>
        </footer>
      </div>
    </>
  );
}



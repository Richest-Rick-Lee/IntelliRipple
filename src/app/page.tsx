"use client";

import { useEffect } from "react";
import Nav from "./components/Nav";
import { useI18n } from "../i18n/LanguageContext";

function StarIcon({ id }: { id: string }) {
  return (
    <span className="star-icon">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={id} x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="0.5" stopColor="#6366f1" />
            <stop offset="1" stopColor="#f97316" />
          </linearGradient>
        </defs>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill={`url(#${id})`} />
      </svg>
    </span>
  );
}

function BulletCopy({ lead, items, foot, idPrefix }: { lead: string; items: string[]; foot: string; idPrefix: string }) {
  return (
    <p className="card-sub-text" style={{ whiteSpace: "pre-line" }}>
      {lead}
      {"\n\n"}
      {items.map((item, index) => (
        <span key={item}>
          <StarIcon id={`${idPrefix}${index}`} />
          {item}
          {"\n"}
        </span>
      ))}
      {"\n"}
      {foot}
    </p>
  );
}

export default function HomePage() {
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
                  {t.home.title} <span className="hero-title-gradient">{t.home.titleHighlight}</span>
                </h1>
                <p className="hero-desc">{t.home.desc}</p>
              </div>
            </div>
          </section>
          <section className="products-section">
            <article className="product-card">
              <div className="product-meta">
                <h2 className="product-title">{t.home.buildTitle}</h2>
              </div>
              <div className="card-sub">
                <div className="card-sub-content">
                  <BulletCopy
                    lead={t.home.buildLead}
                    items={t.home.buildItems}
                    foot={t.home.buildFoot}
                    idPrefix="homeStarBuild"
                  />
                </div>
              </div>
            </article>
            <article className="product-card">
              <div className="product-meta">
                <h2 className="product-title">{t.home.whyTitle}</h2>
              </div>
              <div className="card-sub">
                <div className="card-sub-content">
                  <BulletCopy
                    lead={t.home.whyLead}
                    items={t.home.whyItems}
                    foot={t.home.whyFoot}
                    idPrefix="homeStarWhy"
                  />
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

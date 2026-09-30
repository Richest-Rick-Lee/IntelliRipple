"use client";

import { useEffect } from "react";
import Nav from "../components/Nav";
import { useI18n } from "../../i18n/LanguageContext";

export default function CulturePage() {
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
                  {t.culture.title} <span className="hero-title-gradient">{t.culture.titleHighlight}</span>
                </h1>
                <p className="hero-desc">
                  {t.culture.desc}
                </p>
              </div>
            </div>
          </section>
          <section className="prajna-showcase">
            <div className="prajna-grid">
              {t.culture.cards.map((card) => (
                <article className="product-card" key={card.title}>
                  <div className="product-meta">
                    <h2 className="product-title">{card.title}</h2>
                  </div>
                  <div className="card-sub">
                    <p className="card-sub-text" style={{ whiteSpace: "pre-line" }}>
                      {card.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
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



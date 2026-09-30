"use client";

import { useEffect } from "react";
import Nav from "../components/Nav";
import { useI18n } from "../../i18n/LanguageContext";

export default function ContactPage() {
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
                  {t.contact.title} <span className="hero-title-gradient">{t.contact.titleHighlight}</span>
                </h1>
                <p className="hero-desc">
                  {t.contact.desc}
                </p>
              </div>
            </div>
          </section>
          <section className="products-section">
            <article className="product-card">
              <div className="product-meta">
                <h2 className="product-title">{t.contact.infoTitle}</h2>
              </div>
              <div className="card-sub">
                <p className="card-sub-text" style={{ whiteSpace: "pre-line" }}>
                  {t.contact.phoneLabel}{t.contact.phone}{"\n\n"}
                  {t.contact.emailLabel}{t.contact.email}{"\n\n"}
                  {t.contact.addressLabel}{t.contact.address}
                </p>
              </div>
            </article>
            <article className="product-card">
              <div className="product-meta">
                <h2 className="product-title">{t.contact.hoursTitle}</h2>
              </div>
              <div className="card-sub">
                <p className="card-sub-text" style={{ whiteSpace: "pre-line" }}>
                  {t.contact.hours.join("\n\n")}
                </p>
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



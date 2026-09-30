"use client";

import { useEffect } from "react";
import Image from "next/image";
import Nav from "../components/Nav";
import { useI18n } from "../../i18n/LanguageContext";

export default function ProductsPage() {
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
              <div className="products-hero-text">
                <h1 className="hero-title">
                  {t.products.title} <span className="hero-title-gradient">{t.products.titleHighlight}</span>
                </h1>
                <p className="hero-desc">
                  {t.products.desc}
                </p>
              </div>
            </div>
          </section>
          <section className="products-section">
            <article className="product-card">
              <div className="product-image-wrapper">
                <Image
                  src="/products/fubowave.png"
                  alt={t.products.fuboAlt}
                  width={640}
                  height={240}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <div className="product-meta">
                <h2 className="product-title">{t.products.fuboTitle}</h2>
                <span className="product-tag">{t.products.fuboTag}</span>
              </div>
              <div className="card-sub">
                <p className="card-sub-text">{t.products.fuboP1}</p>
                <p className="card-sub-text" style={{ marginTop: "0.6rem" }}>{t.products.fuboP2}</p>
              </div>
            </article>
            <article className="product-card">
              <div className="product-image-wrapper">
                <Image
                  src="/products/bolevalley.png"
                  alt={t.products.boleAlt}
                  width={640}
                  height={240}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <div className="product-meta">
                <h2 className="product-title">{t.products.boleTitle}</h2>
                <span className="product-tag">{t.products.boleTag}</span>
              </div>
              <div className="card-sub">
                <p className="card-sub-text">{t.products.boleP1}</p>
                <p className="card-sub-text" style={{ marginTop: "0.6rem" }}>{t.products.boleP2}</p>
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



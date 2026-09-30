"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useI18n } from "../../i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Nav() {
  const { t } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // 点击外部区域关闭菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // 防止背景滚动
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="nav-blur" ref={navRef}>
      <div className="nav-inner">
        <Link href="/" className="logo" onClick={closeMobileMenu}>
          <Image 
            src="/logo.png" 
            alt={t.nav.logoAlt} 
            width={48} 
            height={48} 
            className="logo-img"
            priority
          />
          <div className="logo-text-main">
            <div className="logo-intelli-ripple">
              <span className="logo-intelli">Intelli</span>
              <span className="logo-ripple">Ripple</span>
            </div>
            <div className="logo-sub-cn">{t.nav.logoSub}</div>
          </div>
        </Link>
        <div className="nav-right">
          <nav className={`nav-links ${mobileMenuOpen ? "mobile-open" : ""}`}>
            <Link className="nav-link" href="/" onClick={closeMobileMenu}>
              {t.nav.home}
            </Link>
            <Link className="nav-link" href="/about" onClick={closeMobileMenu}>
              {t.nav.about}
            </Link>
            <Link className="nav-link" href="/products" onClick={closeMobileMenu}>
              {t.nav.products}
            </Link>
            <Link className="nav-link" href="/culture" onClick={closeMobileMenu}>
              {t.nav.culture}
            </Link>
            <Link className="nav-link" href="/contact" onClick={closeMobileMenu}>
              {t.nav.contact}
            </Link>
          </nav>
          <LanguageSwitcher />
          <button
            className={`nav-mobile-toggle ${mobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label={t.nav.menuToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}


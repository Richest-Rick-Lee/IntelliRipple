"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useI18n } from "../../i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const SCROLL_THRESHOLD = 12;
const ALWAYS_SHOW_TOP = 72;

export default function Nav() {
  const { t } = useI18n();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navHeight, setNavHeight] = useState(80);
  const navRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const accumulated = useRef(0);
  const ticking = useRef(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((open) => !open);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const readY = () => Math.max(0, window.scrollY || document.documentElement.scrollTop || 0);

  // 测量导航高度，给占位用，避免改为 fixed 后内容上顶
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const measure = () => {
      setNavHeight(el.offsetHeight || 80);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 换页时重置显隐状态
  useEffect(() => {
    lastScrollY.current = readY();
    accumulated.current = 0;
    setNavHidden(false);
    setScrolled(lastScrollY.current > 8);
    setMobileMenuOpen(false);
  }, [pathname]);

  // 点击外部区域关闭菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
      setNavHidden(false);
      accumulated.current = 0;
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // 下滑隐藏、上滑显示
  useEffect(() => {
    lastScrollY.current = readY();
    accumulated.current = 0;
    setScrolled(lastScrollY.current > 8);

    const update = () => {
      const currentY = readY();
      const delta = currentY - lastScrollY.current;
      lastScrollY.current = currentY;
      setScrolled(currentY > 8);

      if (mobileMenuOpen) {
        setNavHidden(false);
        accumulated.current = 0;
        ticking.current = false;
        return;
      }

      if (currentY <= ALWAYS_SHOW_TOP) {
        setNavHidden(false);
        accumulated.current = 0;
        ticking.current = false;
        return;
      }

      if (Math.abs(delta) < 1) {
        ticking.current = false;
        return;
      }

      if ((delta > 0 && accumulated.current < 0) || (delta < 0 && accumulated.current > 0)) {
        accumulated.current = 0;
      }

      accumulated.current += delta;

      if (accumulated.current >= SCROLL_THRESHOLD) {
        setNavHidden(true);
        accumulated.current = 0;
      } else if (accumulated.current <= -SCROLL_THRESHOLD) {
        setNavHidden(false);
        accumulated.current = 0;
      }

      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileMenuOpen, pathname]);

  return (
    <>
      <div className="nav-spacer" style={{ height: navHeight }} aria-hidden="true" />
      <header
        className={`nav-blur${scrolled ? " nav-blur-scrolled" : ""}${navHidden ? " nav-blur-hidden" : ""}`}
        ref={navRef}
      >
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
    </>
  );
}

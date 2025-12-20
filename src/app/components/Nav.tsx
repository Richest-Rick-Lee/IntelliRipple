"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Nav() {
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
            alt="IntelliRipple Logo" 
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
            <div className="logo-sub-cn">灵漪科技</div>
          </div>
        </Link>
        <button
          className={`nav-mobile-toggle ${mobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="切换菜单"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav-links ${mobileMenuOpen ? "mobile-open" : ""}`}>
          <Link className="nav-link" href="/" onClick={closeMobileMenu}>
            首页
          </Link>
          <Link className="nav-link" href="/about" onClick={closeMobileMenu}>
            关于我们
          </Link>
          <Link className="nav-link" href="/products" onClick={closeMobileMenu}>
            产品介绍
          </Link>
          <Link className="nav-link" href="/culture" onClick={closeMobileMenu}>
            Prajna
          </Link>
          <Link className="nav-link" href="/contact" onClick={closeMobileMenu}>
            联系我们
          </Link>
        </nav>
      </div>
    </header>
  );
}


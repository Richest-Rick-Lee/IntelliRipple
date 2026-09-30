"use client";

import { useEffect, useRef, useState } from "react";
import { LOCALES } from "../../i18n";
import { useI18n } from "../../i18n/LanguageContext";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const current = LOCALES.find((item) => item.id === locale) ?? LOCALES[0];

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className={`lang-switch ${open ? "open" : ""}`} ref={rootRef}>
      <button
        type="button"
        className="lang-switch-btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.nav.language}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="lang-switch-globe" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <defs>
              <linearGradient id="langGlobe" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38bdf8" />
                <stop offset="0.5" stopColor="#6366f1" />
                <stop offset="1" stopColor="#f97316" />
              </linearGradient>
            </defs>
            <circle cx="12" cy="12" r="9" stroke="url(#langGlobe)" strokeWidth="1.6" />
            <path
              d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9z"
              stroke="url(#langGlobe)"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="lang-switch-label">{current.label}</span>
        <span className="lang-switch-short">{current.short}</span>
        <span className={`lang-switch-chevron ${open ? "up" : ""}`} aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      {open && (
        <ul className="lang-switch-menu" role="listbox" aria-label={t.nav.language}>
          {LOCALES.map((item) => {
            const active = item.id === locale;
            return (
              <li key={item.id} role="none">
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  className={`lang-switch-option ${active ? "active" : ""}`}
                  onClick={() => {
                    setLocale(item.id);
                    setOpen(false);
                  }}
                >
                  <span className="lang-code">{item.code}</span>
                  <span className="lang-option-label">{item.label}</span>
                  <span className="lang-check" aria-hidden="true">
                    {active && (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7.2 5.4 10l6.1-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

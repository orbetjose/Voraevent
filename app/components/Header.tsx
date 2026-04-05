"use client";

import { useEffect, useState } from "react";
import { getMenuInfo } from "../utils/wp";
import { Menu } from "../types";
import { useRouter, usePathname, redirect } from "next/navigation";

export default function Header() {
  const currentDomain = process.env.NEXT_PUBLIC_WP_DOMAIN;
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<Menu[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    getMenuInfo("navbar")
      .then((data) => setMenuItems(data))
      .catch((error) => console.error("Error fetching menu:", error));
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 300);
    }
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      closeMenu();
    } else if (pathname !== "/") {
      router.push(`/#${sectionId}`);
      closeMenu();
    }
  };

  return (
    <header className="w-full">
      <div className="mx-auto max-w-6xl 2xl:max-w-8xl relative">
        <nav className="flex md:justify-between pt-4 pb-4 md:px-10 px-4 gap-18 md:gap-0  w-full z-50 top-0 absolute">
          <div className="md:flex-1 z-50">
            <a
              href="/"
              className="flex z-50">
              <img
                className={`md:h-10 h-8 logo mr-auto  ${menuOpen ? "invert" : "md:invert-0"} `}
                src={`${currentDomain}wp-content/uploads/2026/03/logo-vora.png`}
                alt="Logo Vora"
              />
            </a>
          </div>
          <div className="hidden md:flex flex-2 justify-end">
            <ul
              id="desktop-menu"
              className="items-center justify-center hidden text-base md:flex gap-10 fancy-menu font-demibold text-white">
              {menuItems.map((item, index) => {
                let relativePath = item.permalink;
                let namesSections = item.name.replace(" ", "-").toLowerCase();
                const isActive = pathname === relativePath;
                return (
                  <li key={index}>
                    <button
                      className={`${isActive ? "activeMenu" : ""} pb-1 relative cursor-pointer`}
                      onClick={() => scrollToSection(namesSections)}>
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="navbar md:hidden absolute">
            <div className={`${menuOpen ? "open" : ""} container nav-container`}>
              <div
                className="hamburger-lines"
                onClick={toggleMenu}>
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>
              <div className="menu-items">
                <ul
                  id="mobile-menu"
                  className="items-center justify-center md:hidden text-sm  gap-4 fancy-menu uppercase font-demibold text-black">
                  {menuItems.map((item, index) => {
                    let namesSections = item.name.replace(" ", "-").toLowerCase();
                    return (
                      <li key={index}>
                        <button
                          className="cursor-pointer"
                          onClick={() => scrollToSection(namesSections)}>
                          {item.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="spacer-fixed md:hidden"></div>
      </div>
    </header>
  );
}

import React from "react";

// Node modules
import { useState } from "react";

// Components
import Navbar from "./Navbar";

function Header() {
  const [navOpen, setNavOpen] = useState(true);

  return (
    <header className="fixed left-0 top-0 z-40 flex h-20 w-full items-center bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 md:grid md:grid-cols-[1fr,3fr,1fr] md:px-6">
        {/* Logo 영역 */}
        <h1>
          <a href="/" className="logo">
            <img
              src="/src/assets/logo_dev-oh.png"
              width={40}
              height={40}
              alt="Dev-oh"
            />
          </a>
        </h1>

        {/* Navbar 영역 */}
        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        {/* Contact 영역 */}
        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}

export default Header;

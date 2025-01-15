// node modules
import { useState } from "react";

// components
import Navbar from "../Navbar";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header>
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 md:grid md:grid-cols-[1fr,3fr,1fr] md:px-6">
        {/* Logo 영역 */}
        <h1>
          <a href="/" className="logo flex items-center justify-center gap-3">
            <img
              src="/public/assets/logo_dev-oh.png"
              width={36}
              height={36}
              alt="dev-oh logo"
            />
            <h1 className="font-jetbrains text-2xl font-semibold">dev-oh</h1>
          </a>
        </h1>

        {/* Navbar 영역 */}
        <div className="relative rounded-xl md:justify-self-center">
          <button
            className="menu-btn neumorphism-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        {/* Contact 영역 */}
        {/* <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Contact Me
        </a> */}
      </div>
    </header>
  );
}

export default Header;

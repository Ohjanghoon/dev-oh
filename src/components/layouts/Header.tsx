// node modules
import { useState } from "react";

// components
import Navbar from "../Navbar";
import ThemeControl from "../ThemeControl";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header>
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 md:grid md:grid-cols-[1fr,4fr] md:px-6">
        {/* Logo 영역 */}
        <h1>
          <a href="/" className="logo flex items-center justify-center gap-3">
            <img
              src="/assets/logo_dev-oh.png"
              width={36}
              height={36}
              alt="dev-oh logo"
            />
            <h4>dev-oh</h4>
          </a>
        </h1>

        {/* Navbar 영역 */}
        <div className="flex items-center gap-3 md:grid md:w-full md:grid-cols-[3fr,1fr]">
          <div className="relative order-3 rounded-xl md:order-2 md:justify-self-center">
            <button
              className="menu-btn neumorphism-btn md:hidden"
              onClick={() => setNavOpen((prev) => !prev)}
            >
              <span className="material-symbols-rounded">
                {navOpen ? "close" : "menu"}
              </span>
            </button>
            <Navbar navOpen={navOpen} handleSetNavOpen={setNavOpen} />
          </div>

          {/* Contact 영역 */}
          {/* <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Contact Me
        </a> */}
          <div className="order-2 justify-self-end md:order-3">
            <ThemeControl />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

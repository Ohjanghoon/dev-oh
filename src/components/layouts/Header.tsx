// node modules
import { useEffect, useState } from "react";
import { Img } from "react-image";

// components
import Navbar from "../Navbar";
import ThemeControl from "../ThemeControl";

// icons
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [isScroll, setIsScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-40 flex w-full items-center transition-[background-color,height] duration-300 ${isScroll ? "bg-primary h-16 border-b-[1px] border-gray-300 shadow-sm dark:border-gray-800 lg:h-[4.5rem]" : "h-20 bg-transparent"}`}
    >
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 md:grid md:grid-cols-[1fr,4fr] md:px-6">
        {/* Logo 영역 */}
        <h1>
          <a
            title="home_link"
            href="/"
            className="logo flex items-center justify-center gap-3"
          >
            <Img
              src="/assets/logo_dev-oh.ico"
              width={32}
              height={32}
              alt="dev-oh logo"
              className="h-8 w-8 rounded-lg"
            />
            <span className="text-[22px] font-bold">dev-oh</span>
          </a>
        </h1>

        {/* Navbar 영역 */}
        <div className="flex items-center gap-3 md:grid md:w-full md:grid-cols-[3fr,1fr]">
          <div className="relative order-3 rounded-xl md:order-2 md:justify-self-center">
            <button
              aria-label="mobile_nav_hamburger_button"
              className="neumorphism-btn grid h-10 w-10 place-items-center rounded-xl md:hidden"
              onClick={() => setNavOpen((prev) => !prev)}
            >
              <span>{navOpen ? <IoMdClose /> : <GiHamburgerMenu />}</span>
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

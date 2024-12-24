// Node Modules
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

interface NavItem {
  label: string;
  link: string;
  className: string;
  ref?: React.MutableRefObject<any>;
}

interface NavbarOpenProps {
  navOpen: boolean;
}

function Navbar({ navOpen }: NavbarOpenProps) {
  const lastActiveLink = useRef<HTMLElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);

  const initActiveBox = () => {
    console.log(lastActiveLink.current);
    console.log(activeBox.current);
    if (activeBox.current && lastActiveLink.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height =
        lastActiveLink.current.offsetHeight + "px";
    }
  };

  useEffect(initActiveBox, []);
  window.addEventListener("resize", initActiveBox);

  const activeCurrentLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (lastActiveLink.current) {
      lastActiveLink.current?.classList.remove("active");
    }
    event.currentTarget.classList.add("active");
    lastActiveLink.current = event.currentTarget;

    if (activeBox.current) {
      activeBox.current.style.top = event.currentTarget.offsetTop + "px";
      activeBox.current.style.left = event.currentTarget.offsetLeft + "px";
      activeBox.current.style.width = event.currentTarget.offsetWidth + "px";
      activeBox.current.style.height = event.currentTarget.offsetHeight + "px";
    }
  };

  const navItems: NavItem[] = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About Me",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Experiences",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Projects",
      link: "#reviews",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];

  return (
    <nav className={"navbar" + (navOpen ? " active" : "")}>
      {navItems.map((item: NavItem, key) => (
        <a
          href={item.link}
          ref={item.ref}
          className={item.className}
          key={key}
          onClick={activeCurrentLink}
        >
          {item.label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
}

// Navbar.propTypes = {
//   navOpen: PropTypes.bool.isRequired,
// };

export default Navbar;

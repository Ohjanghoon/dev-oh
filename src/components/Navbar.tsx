// Node Modules
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  label: string;
  link: string;
  className: string;
}

interface NavbarOpenProps {
  navOpen: boolean;
  handleSetNavOpen: (isOpen: boolean) => void;
}

function Navbar({ navOpen, handleSetNavOpen }: NavbarOpenProps) {
  const [activeLink, setActiveLink] = useState("");
  const lastActiveLink = useRef<HTMLElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  // ActiveBox 초기화 및 위치 이동
  const moveToActiveBox = () => {
    const currentActiveLink = document.querySelector(
      `.nav-link[href='${location.pathname}']`,
    ) as HTMLElement; // 현재 location.pathname에 해당하는 링크를 선택
    lastActiveLink.current = currentActiveLink;

    if (currentActiveLink && activeBox.current) {
      activeBox.current.style.top = currentActiveLink.offsetTop + "px";
      activeBox.current.style.left = currentActiveLink.offsetLeft + "px";
      activeBox.current.style.width = currentActiveLink.offsetWidth + "px";
      activeBox.current.style.height = currentActiveLink.offsetHeight + "px";
    }
  };

  useEffect(() => {
    setActiveLink(location.pathname); // 현재 위치 업데이트
    moveToActiveBox(); // activeBox를 현재 활성화된 Link로 이동
  }, [location]);

  window.addEventListener("resize", moveToActiveBox); // 창 크기 조정 시 activeBox 위치 재조정

  const onClickActiveLinkHandler = (
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    if (lastActiveLink.current) {
      lastActiveLink.current.classList.remove("active");
    }
    event.currentTarget.classList.add("active");
    lastActiveLink.current = event.currentTarget;

    if (activeBox.current) {
      activeBox.current.style.top = event.currentTarget.offsetTop + "px";
      activeBox.current.style.left = event.currentTarget.offsetLeft + "px";
      activeBox.current.style.width = event.currentTarget.offsetWidth + "px";
      activeBox.current.style.height = event.currentTarget.offsetHeight + "px";
    }

    handleSetNavOpen(false);
  };

  const navItems: NavItem[] = [
    {
      label: "Home",
      link: "/",
      className: "nav-link",
    },
    {
      label: "About Me",
      link: "/about",
      className: "nav-link",
    },
    {
      label: "Experiences",
      link: "/experiences",
      className: "nav-link",
    },
    {
      label: "Projects",
      link: "/projects",
      className: "nav-link",
    },
  ];

  return (
    <nav className={"navbar" + (navOpen ? " active" : "")}>
      {navItems.map((item: NavItem, key) => (
        <Link
          to={item.link}
          className={
            item.className + `${activeLink === item.link ? " active" : ""}`
          }
          key={key}
          onClick={onClickActiveLinkHandler}
        >
          {item.label}
        </Link>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
}

export default Navbar;

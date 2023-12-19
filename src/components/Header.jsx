import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const header = useRef(null);
  const body = document.body;

  const toggle = () => {
    setMenu(!menu);
    if (menu === false) {
      body.classList.add("active");
    } else {
      body.classList.remove("active");
    }
  };
  const onFogClick = (e) => {
    if (e.target === e.currentTarget && menu) toggle();
  };
  useEffect(() => {
    const onScroll = () => {
      if (document.documentElement.scrollTop > 20) {
        header.current.classList.add("sticky");
      } else {
        header.current.classList.remove("sticky");
      }
    };
    if (header.current) {
      window.addEventListener("scroll", onScroll);
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, [header]);

  useEffect(() => {
    const links = document.querySelectorAll(".nav__link");
    const sections = document.querySelectorAll(".anchor");
    function changeLinkState() {
      let index = sections.length;
      while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
      links.forEach((link) => link.classList.remove("active"));
      links[index]?.classList.add("active");
    }
    links.forEach((e) => {
      onLinkClick(e);
    });
    function onLinkClick(linkItem) {
      linkItem.addEventListener("click", function () {
        toggle();
      });
    }
    window.onscroll = function () {
      changeLinkState();
    };
  });
  return (
    <>
      <header className="header" ref={header}>
        <div className="autoContainer">
          <div className="header__inner">
            <a href="#hero" className="logo">
              <img src="./images/logo.svg" alt="logo" />
            </a>
            <nav className={`nav ${menu ? "active" : ""}`} onClick={onFogClick}>
              <div className="nav__inner">
                <div className="nav__group">
                  <a href="#hero" className="nav__link active">
                    Your Advantages
                  </a>
                  <a href="#platform" className="nav__link">
                    AI Platform
                  </a>
                  <a href="#offering" className="nav__link">
                    Offering
                  </a>
                  <a href="#client" className="nav__link">
                    Client Type
                  </a>
                  <a href="#footer" className="nav__link">
                    Contact
                  </a>
                </div>
              </div>
            </nav>
            <button
              className={`burger  ${menu ? "active" : ""}`}
              id="menuBtn"
              onClick={toggle}
            ></button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

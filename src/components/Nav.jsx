"use client"
import React, { useEffect, useRef, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import useClickOutside from "../utils/ClickOutSide";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const closeMenu = useRef(null);

  useClickOutside(closeMenu, () => {
    setHidden(false);
  });

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      // keep scroll visible but disable when nav menu open
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        if (hidden === false) {
          setShow(true);
        }
      } else {
        // if scroll up show the navbar
        setShow(false);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);
  return (
    <nav className={`active-nav ${show && "hidden"}`}>
      <a href="/">
        <svg
          id="logo"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 84 96"
          width={45}
        >
          <title>Logo</title>
          <g transform="translate(-8.000000, -2.000000)">
            <g transform="translate(11.000000, 5.000000)">
              <polygon
                id="Shape"
                stroke="#64ffda"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="39 0 0 22 0 67 39 90 78 68 78 23"
                fill="none"
              />

              <text
                x="39"
                y="48"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="40"
                fill="#64ffda"
              >
                R
              </text>
            </g>
          </g>
        </svg>
      </a>
      <ol className="top">
        <li>
          {" "}
          <a href="#about">
            <span>1.</span> About
          </a>
        </li>
        <li>
          {" "}
          <a href="#exp">
            <span>2.</span> Experience
          </a>
        </li>
        <li>
          {" "}
          <a href="#project">
            <span>3.</span> Project
          </a>
        </li>
        <li>
          {" "}
          <a href="#education">
            <span>4.</span> Education
          </a>
        </li>
        <li>
          {" "}
          <a href="#contact">
            <span>5.</span> Contact
          </a>
        </li>
        <a
          className="resume"
          href="/MyResume.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          Resume
        </a>
      </ol>
      <div className="menu" onClick={() => setHidden(true)}>
        <HiMenuAlt1 />
      </div>
      <div className={`${hidden ? "menu_hidden" : "menu_item"}`}>
        <div className="blur"></div>
        <div className="item" ref={closeMenu}>
          <div className="cross" onClick={() => setHidden(false)}>
            <MdOutlineClose />
          </div>
          <ol>
            <li>
              {" "}
              <a href="#about">
                <span>1.</span> About
              </a>
            </li>
            <li>
              {" "}
              <a href="#exp">
                <span>2.</span> Experience
              </a>
            </li>
            <li>
              {" "}
              <a href="#project">
                <span>3.</span> Project
              </a>
            </li>
            <li>
              {" "}
              <a href="#education">
                <span>4.</span> Education
              </a>
            </li>
            <li>
              {" "}
              <a href="#contact">
                <span>5.</span> Contact
              </a>
            </li>
            <a
              className="resume"
              href="/MyResume.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              Resume
            </a>
          </ol>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

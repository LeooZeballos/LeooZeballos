import React, { useState } from "react";
import { ImHome } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import "./nav.css";

const Nav = () => {
  const [active, setActive] = useState("#header");

  return (
    <nav>
      <a
        href="#header"
        className={active === "#header" ? "active" : ""}
        onClick={() => setActive("#header")}
      >
        <ImHome />
      </a>
      <a
        href="#about"
        className={active === "#about" ? "active" : ""}
        onClick={() => setActive("#about")}
      >
        <FaUserAlt />
      </a>
      <a
        href="#experience"
        className={active === "#experience" ? "active" : ""}
        onClick={() => setActive("#experience")}
      >
        <MdOutlineWork />
      </a>
      <a
        href="#portfolio"
        className={active === "#portfolio" ? "active" : ""}
        onClick={() => setActive("#portfolio")}
      >
        <AiFillProject />
      </a>
      <a
        href="#contact"
        className={active === "#contact" ? "active" : ""}
        onClick={() => setActive("#contact")}
      >
        <IoMdContact />
      </a>
    </nav>
  );
};

export default Nav;

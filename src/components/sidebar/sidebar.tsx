"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const pathUrl = usePathname();

  return (
    <aside className={`aside ${open ? "open" : ""}`}>
      <div onClick={handleOpen} className="nav-toggler">
        <span />
      </div>
      <div className="aside-inner">
        <div className="">
          <Link href="/">
            <Image src="imgs/logo.svg" alt="Logo" width={166} height={198} />
          </Link>
        </div>
        <ul className="nav">
          <li onClick={handleClose}>
            <Link href="/" className={`${pathUrl == "/" && "active"}`}>
              Home
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/about"
              className={`${pathUrl == "/about" && "active"}`}
            >
              About
            </Link>
          </li>
          {/* <li onClick={handleClose}>
            <Link
              href="/services"
              className={`${pathUrl == "/services" && "active"}`}
            >
              <i className="fa fa-list" /> Services
            </Link>
          </li> */}
          <li onClick={handleClose}>
            <Link
              href="/projects"
              className={`${pathUrl == "/projects" && "active"}`}
            >
              Projects
            </Link>
          </li>
          {/* <li onClick={handleClose}>
            <Link href="/blog" className={`${pathUrl == "/blog" && "active"}`}>
              <i className="fa fa-envelope" /> Blog
            </Link>
          </li> */}
          {/* <li onClick={handleClose}>
            <Link
              href="/contact"
              className={`${pathUrl == "/contact" && "active"}`}
            >
              <i className="fa fa-comments" /> Contact
            </Link>
          </li> */}
        </ul>
        {/* <div className="copyright">
          Created with ❤️ By{" "}
          <a href="http://alsiam.com" target="_blank" rel="noopener noreferrer">
            Al Siam
          </a>
        </div> */}
      </div>
    </aside>
  );
};

export default Sidebar;

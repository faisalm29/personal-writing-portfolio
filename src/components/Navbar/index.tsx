"use client";

import Link from "next/link";
import { HamburgerMenu, Close } from "@/components/Icon";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const links = [
  { name: "Works", url: "/work" },
  {
    name: "Resume",
    url: "https://drive.google.com/file/d/1yUYQpp4Z5ECr49i98JkUFNeb0_laXkny/view?usp=sharing",
  },
  { name: "Contact", url: "mailto:faisal.muhammad2911@gmail.com" },
];

const Logo = dynamic(() => import("@/components/Navbar/Logo"), { ssr: false });

const Navbar = () => {
  const year = new Date().getFullYear();
  const [navOpen, setNavOpen] = useState(false);
  const pathName = usePathname();

  const showNavHandler = () => {
    setNavOpen(true);

    if (typeof window !== "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  const closeNavHandler = () => {
    setNavOpen(false);

    document.body.style.overflow = "scroll";
  };

  useEffect(() => {
    setNavOpen(false);
    document.body.style.overflow = "unset";
  }, [pathName]);

  return (
    <nav className="fixed top-0 z-30 mt-0 w-full bg-primary-50 bg-opacity-10 bg-clip-padding p-4 backdrop-blur-sm backdrop-filter">
      <div className="flex items-center justify-between">
        {/* Logo/Home link */}
        <Logo />

        {/* Desktop Navbar */}
        <ul className="hidden items-center md:flex">
          {links.map((link, id) => (
            <li key={id} className="ml-16 first:ml-0">
              <Link
                target={`${id === 1 ? "_blank" : "_self"}`}
                href={link.url}
                className="rounded-full border-[1px] border-primary-950 px-6 py-[2px] font-haskoy text-primary-950 transition-all duration-300 ease-in-out hover:bg-primary-950 hover:text-primary-50 active:border-primary-800 active:bg-primary-800"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navbar */}
        <button
          className="block md:hidden"
          onClick={showNavHandler}
          aria-label="Open menu"
        >
          <HamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu Open*/}
      <div
        className={`fixed left-0 top-0 h-screen w-full bg-primary-50 md:hidden ${navOpen ? "fixed" : "hidden"}`}
      >
        <div className="grid h-screen grid-cols-1 content-between justify-items-end p-4">
          <button onClick={closeNavHandler}>
            <Close />
          </button>
          <ul>
            {links.map((link, id) => (
              <li
                key={id}
                className="mb-16 text-right font-haskoy text-m-h1 font-light last:mb-0"
              >
                <Link
                  href={link.url}
                  className="border-b-[6px] border-b-transparent text-primary-950 transition-all duration-300 ease-in-out hover:border-b-primary-950"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex w-full items-center justify-between">
            <p>Portfolio</p>
            <p>{year}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

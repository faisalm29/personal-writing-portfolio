"use client";

import Image from "next/image";
import Link from "next/link";
import { HamburgerMenu, Close } from "@/components/Icon";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const links = [
  { name: "Works", url: "/work" },
  {
    name: "Resume",
    url: "https://drive.usercontent.google.com/download?id=1rVRtU6YdI4Dwv_HdgJyuqc_wV_KULtdL&export=download&authuser=0&confirm=t&uuid=a09d75ca-1894-4aa5-9df8-5129241edcdb&at=APZUnTXNAH9BJo-LqVwiAMO-NdEn:1703679281725",
  },
  { name: "Contact", url: "mailto:faisal.muhammad2911@gmail.com" },
];

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
    <nav className="fixed top-0 z-20 mt-0 w-full p-4">
      <div className="flex items-center justify-between">
        {/* Logo/Home link */}
        <Link href="/">
          <Image
            src="/faisal.svg"
            alt="Faisal Logo"
            width={48}
            height={48}
            priority
          />
        </Link>

        {/* Desktop Navbar */}
        <ul className="hidden items-center md:flex">
          {links.map((link, id) => (
            <li key={id} className="ml-16 first:ml-0">
              <Link
                href={link.url}
                className="rounded-full border-[1px] border-primary-950 px-6 py-[2px] font-haskoy text-primary-950 duration-300 ease-in-out hover:bg-primary-950 hover:text-primary-50"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navbar */}
        <button className="block md:hidden" onClick={showNavHandler}>
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
                <Link href={link.url} className="">
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

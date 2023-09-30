import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Close, HamburgerMenu } from "./Icon";

const links = [
  { placeholder: "Home", url: "/" },
  { placeholder: "Works", url: "/works" },
];

const Navbar = (): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const route = useRouter();

  useEffect(() => {
    setIsNavOpen(false);
  }, [route.asPath]);

  return (
    <nav className="mb-16">
      {/* Desktop navigation menu */}
      <div className="hidden items-center justify-center gap-16 md:flex">
        {links.map((link) => (
          <Link href={link.url} key={link.placeholder} className="p-4">
            {link.placeholder}
          </Link>
        ))}
      </div>

      {/* Hamburger button for mobile navigation */}
      <div className="flex items-center justify-end md:hidden">
        <button className="p-2" onClick={() => setIsNavOpen(true)}>
          <HamburgerMenu height={32} width={32} fill="#252525" />
        </button>
      </div>

      {/* Mobile Navigation menu*/}
      <div
        className={`fixed left-0 top-0 z-50 h-screen w-full bg-purple-400 lg:hidden ${
          isNavOpen ? "fixed" : "hidden"
        }`}
      >
        <div className="flex items-center justify-end">
          <button className="p-2" onClick={() => setIsNavOpen(false)}>
            <Close width={32} height={32} fill="#252525" />
          </button>
        </div>
        <ul>
          {links.map((link) => (
            <li key={link.placeholder}>
              <Link href={link.url}>{link.placeholder}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

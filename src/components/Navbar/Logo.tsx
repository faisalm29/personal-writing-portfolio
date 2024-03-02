import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Logo = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Link href="/">
      <Image
        src="/faisal.svg"
        alt="Faisal Logo"
        width={`${screenWidth < 768 ? 32 : 48}`}
        height={`${screenWidth < 768 ? 32 : 48}`}
        priority
      />
    </Link>
  );
};

export default Logo;

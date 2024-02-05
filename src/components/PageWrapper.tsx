"use client";
import { usePathname } from "next/navigation";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  return (
    <main
      className={`mx-auto mb-48 w-full px-4 md:max-w-[674px] lg:max-w-[960px] ${pathName === "/" ? "mt-0" : "mt-[272px]"}`}
    >
      {children}
    </main>
  );
};

export default PageWrapper;

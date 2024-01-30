"use client";

import { usePathname } from "next/navigation";

const WorkSectionTitle = () => {
  const pathName = usePathname();
  return (
    <>
      {pathName === "/" ? (
        <h3 className="mb-12 text-m-h3 md:mb-16 md:text-t-h3 lg:text-d-h3">
          Selected Works
        </h3>
      ) : (
        <h1 className="mb-12 text-m-h3 md:mb-16 md:text-t-h3 lg:text-d-h3">
          Selected Works
        </h1>
      )}
    </>
  );
};

export default WorkSectionTitle;

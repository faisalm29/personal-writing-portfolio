"use client";

import { usePathname } from "next/navigation";

const WorkCardBody = ({
  type,
  description,
}: {
  type: string;
  description: string;
}) => {
  const pathName = usePathname();
  return (
    <div className="lg:col-span-6">
      {pathName === "/" ? (
        <h4 className="mb-4 text-m-h5 md:text-t-h5 lg:text-d-h5">{type}</h4>
      ) : (
        <h2 className="mb-4 text-m-h5 md:text-t-h5 lg:text-d-h5">{type}</h2>
      )}
      <p>{description}</p>
    </div>
  );
};

export default WorkCardBody;

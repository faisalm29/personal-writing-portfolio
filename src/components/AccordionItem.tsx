import { RefObject, useEffect, useRef, useState } from "react";
import { AccordionProps } from "./types";
import Dropdown from "./Icon/Dropdown";

type AccordionItemProps = {
  item: AccordionProps;
  isOpen: boolean;
  btnOnClick: () => void;
};

const AccordionItem = ({
  item,
  isOpen,
  btnOnClick,
}: AccordionItemProps): JSX.Element => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current as HTMLDivElement;

      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <li>
      <button
        className="flex w-full items-center justify-between bg-surface px-6 py-3"
        onClick={btnOnClick}
      >
        <span>{item.label}</span>
        <span
          className={`transform duration-200 ease-in-out ${
            isOpen ? "-rotate-180" : ""
          }`}
        >
          <Dropdown width={16} height={16} fill="#252525" />
        </span>
      </button>
      <div
        className="transition-height overflow-hidden bg-surface duration-200 ease-in-out"
        style={{ height }}
      >
        <p ref={contentRef}>{item.description}</p>
      </div>
    </li>
  );
};

export default AccordionItem;

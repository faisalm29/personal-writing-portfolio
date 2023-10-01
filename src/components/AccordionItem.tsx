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
  const [visibility, setVisibility] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const togleVisibility = () => {
    setVisibility((v) => !v);
  };

  useEffect(() => {
    if (visibility) {
      const contentEl = contentRef.current as HTMLDivElement;

      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [visibility]);

  return (
    <li>
      <button
        className="flex w-full items-center justify-between bg-surface px-6 py-3"
        onClick={togleVisibility}
      >
        <span>
          <p className="font-bold">{item.label}</p>
        </span>
        <span
          className={`transform duration-200 ease-in-out ${
            visibility ? "-rotate-180" : ""
          }`}
        >
          <Dropdown width={16} height={16} fill="#252525" />
        </span>
      </button>
      <div
        className="transition-height overflow-hidden bg-surface duration-200 ease-in-out"
        style={{ height }}
      >
        <p ref={contentRef} className="p-4">
          {item.description}
        </p>
      </div>
    </li>
  );
};

export default AccordionItem;

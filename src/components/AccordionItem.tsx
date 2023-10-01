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

  const togleVisibility = () => {
    setVisibility((v) => !v);
  };

  return (
    <li>
      <button
        className="flex w-full items-center justify-between bg-surface px-6 py-3"
        onClick={togleVisibility}
      >
        <span>{item.label}</span>
        <span>
          <Dropdown width={16} height={16} fill="#252525" />
        </span>
      </button>
      <div
        className={`transition-height overflow-hidden bg-surface duration-200 ease-in-out ${
          visibility ? "block" : "hidden"
        }`}
      >
        <p>{item.description}</p>
      </div>
    </li>
  );
};

export default AccordionItem;

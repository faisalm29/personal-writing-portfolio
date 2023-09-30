import { useState, useRef } from "react";
import AccordionItem from "./AccordionItem";
import { AccordionProps } from "./types";

const Accordion = ({
  items,
}: {
  items: Array<AccordionProps>;
}): JSX.Element => {
  const [currentIdx, setCurrentIdx] = useState(-1);

  const btnonClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
  };

  return (
    <ul className="grid grid-cols-4 gap-6">
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          item={item}
          isOpen={idx === currentIdx}
          btnOnClick={() => btnonClick(idx)}
        />
      ))}
    </ul>
  );
};

export default Accordion;

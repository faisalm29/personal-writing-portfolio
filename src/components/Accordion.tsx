import AccordionItem from "./AccordionItem";
import { AccordionProps } from "./types";

const Accordion = ({
  items,
}: {
  items: Array<AccordionProps>;
}): JSX.Element => {
  return (
    <ul className="grid grid-cols-4 gap-6">
      {items.map((item, idx) => (
        <AccordionItem key={idx} item={item} />
      ))}
    </ul>
  );
};

export default Accordion;

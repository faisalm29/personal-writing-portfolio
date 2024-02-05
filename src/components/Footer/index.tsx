import { Email, LinkedIn } from "@/components/Icon";

const contacts = [
  {
    logo: <Email />,
    url: "mailto:faisal.muhammad2911@gmail.com",
    label: "Send me an email",
  },
  {
    logo: <LinkedIn />,
    url: "https://www.linkedin.com/in/faisal-muhammad-537741175",
    label: "Visit my linkedin profile",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="p-4">
      <div className="grid grid-cols-2 grid-rows-2 gap-4 md:gap-0">
        <p className="row-span-1 self-end font-haskoy text-m-h3 font-light md:text-t-h3 lg:text-d-h3">
          Portfolio.
        </p>
        <ul className="col-span-1 flex items-end justify-self-end md:row-span-2">
          {contacts.map((contact, id) => (
            <li key={id} className="ml-6 first:ml-0">
              <a href={contact.url} target="__blank" aria-label={contact.label}>
                {contact.logo}
              </a>
            </li>
          ))}
        </ul>
        <div className="col-span-2 justify-self-center md:col-span-1 md:self-end md:justify-self-start">
          <p className="mb-4 text-center text-sm md:text-left">
            Created with 🤍 using{" "}
            <a
              href="https://nextjs.org/"
              target="__blank"
              className="underline decoration-1 underline-offset-4 ease-in-out hover:no-underline"
            >
              next
            </a>
            ,{" "}
            <a
              href="https://tailwindcss.com/"
              target="__blank"
              className="underline decoration-1 underline-offset-4 ease-in-out hover:no-underline"
            >
              tailwind
            </a>
            , and deployed by{" "}
            <a
              href="https://vercel.com/"
              target="__blank"
              className="underline decoration-1 underline-offset-4 ease-in-out hover:no-underline"
            >
              vercel
            </a>
            .
          </p>
          <p className="text-center text-sm md:text-left">
            © {year} Faisal Muhammad. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

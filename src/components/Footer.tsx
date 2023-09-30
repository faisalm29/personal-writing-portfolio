import siteConfig from "@/config/site";

const contacts = [
  {
    placeholder: "LinkedIn",
    url: `https://www.linkedin.com/in/${siteConfig.contacts.linkedin}`,
  },
  {
    placeholder: `${siteConfig.contacts.email}`,
    url: `mailto:${siteConfig.contacts.email}`,
  },
];

const year = new Date().getFullYear();

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-primary-700 p-4">
      <h4 className="mb-4 font-bold text-on-primary">Contacts</h4>
      <ul className="mb-16">
        {contacts.map((contact) => (
          <li key={contact.placeholder} className="mb-2 last:mb-0">
            <a
              className="text-on-primary underline"
              href={contact.url}
              target="_blank"
            >
              {contact.placeholder}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-center text-on-primary">
        &copy; {`${siteConfig.details.title} ${year}`}.
      </p>
    </footer>
  );
};

export default Footer;

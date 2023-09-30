import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type PageProps = {
  children: ReactNode;
};

const Layout = ({ children }: PageProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

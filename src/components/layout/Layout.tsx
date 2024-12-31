import { ReactElement } from "react";
import Navbar from "../ui/Navbar/Navbar";
import Footer from "../ui/Footer/Footer";
import Header from "../ui/Header/Header";

interface LayoutProps {
  children: ReactElement;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Header />
      <main className="h-full py-5 px-5 bg-gray-100 border-t-2 border-black">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

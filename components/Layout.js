import { Footer } from "./Base/Footer";
import { Header } from "./Base/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export { Layout };

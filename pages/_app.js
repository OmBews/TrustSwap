import { Layout } from "../components/Layout";
import FormProvider from "../context";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="headerSpace"></div>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

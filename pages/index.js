import Head from "next/head";

import styles from "../styles/styles.module.scss";
import { CreateTokenForm } from "../components/Forms/CreateTokenForm";

const App = () => {
  return (
    <section className={styles.bodyContainer}>
      <Head>
        <title>Create a cryptocurrency</title>
      </Head>

      <CreateTokenForm />
    </section>
  );
};

export default App;

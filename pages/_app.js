import Head from "next/head";

import Layout from "../components/layout/layout";
import "../styles/globals.css";
import Notifications from "../components/ui/notification";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next Events</title>
        <meta name="description" content="NextJS Events" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
      <Notifications title="Test" message="This is a test" status="success" />
    </Layout>
  );
}

export default MyApp;

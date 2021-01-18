// import "tailwindcss/tailwind.css";
import "../styles/tailwind.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

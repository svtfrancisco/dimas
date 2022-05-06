import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import "./index.scss";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />;
      </SessionProvider>
    </>
  );
}

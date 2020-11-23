import { Global } from "@emotion/core";
import Head from "next/head";
import Link from "next/link";

const globalStyles = {
  body: {
    fontFamily: "MV_Typewriter",
    textAlign: "right" as const,
    direction: "rtl" as const,
    fontSize: "18px",
    letterSpacing: "0.5px",
    color: "#1B2830",
    background: "#FDFDFD",
    lineHeight: "1.5em",
  },
  h1: {
    lineHeight: "1.5em",
  },
};

const pageStyles = {
  maxWidth: "50ch",
  margin: "0 auto",
  marginTop: "2em",
  padding: "2em",
};

function Lhen({ children }) {
  return (
    <div css={pageStyles}>
      <Head>
        <title>Aishath Shafeeu | އައިޝަތު ޝަފީއު</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          httpEquiv="content-type"
          content="text/html; charset=utf-8"
        ></meta>
      </Head>
      <Global styles={globalStyles} />
      <div>{children}</div>
      <footer
        css={{
          fontSize: "1.5em",
          textAlign: "center",
          paddingTop: "2em",
          paddingBottom: "0.5em",
        }}
      >
        <Link href="/">އައިޝަތު ޝަފީއު | Home</Link>
      </footer>
    </div>
  );
}

export default Lhen;

import Head from "next/head";
import Link from "next/link";
import GlobalStyles from "./GlobalStyles";

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
      <GlobalStyles/>
      <header css={{fontWeight: "bold"}}>
        <Link href="/">ޝަފީއާގެ ލިޔުން</Link>
      </header>
      <hr css={{color: "#AF3B42", opacity: 0.1}}/>
      <div css={{paddingTop: "1em"}}>{children}</div>
    </div>
  );
}

export default Lhen;

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
  maxWidth: "65ch",
  margin: "0 auto",
  marginTop: "2em",
  padding: "2em",
};

interface PostListing {
  title: string;
  link: string;
  date: string;
}

const PostListing = ({ title, link, date}: PostListing) => (
  <div css={{ padding: "1em 0"}}>
    <span css={{fontSize: "0.8em"}}>{date}</span>
    <h2><Link href={link}>{title}</Link></h2>
  </div>
)

function HomePage() {
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
      <div>
        <h1>ޝަފީއާގެ ލިޔުން</h1>
        <PostListing title="ހާދަރަނގަޅޭ ޝުކުރިޔާ!" link="/lhen/shukuriyya" date="10 އޮކްޓޮބަރު 2020" />
        <PostListing title="ޅަފަތުގެ ހިޔާ" link="/lhen/lhafathuge" date="14 ނޮވެމްބަރު 2020" />
        <PostListing title="އަޅެފަހެ ކޮރޯނާ" link="/lhen/corona" date="19 ނޮވެމްބަރު 2020" />
      </div>
    </div>
  );
}

export default HomePage;

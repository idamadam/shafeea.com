import Head from "next/head";
import Link from "next/link";
import GlobalStyles from "../components/GlobalStyles";

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
  <Link href={link}>
    <div css={{ padding: "0.5em 0", cursor: "pointer"}}>
      <span css={{fontSize: "0.6em"}}>{date}</span>
      <h3 css={{marginTop: "0.2em"}}><a>{title}</a></h3>
    </div>
  </Link>
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
      <GlobalStyles/>
      <div>
        <h1>ޝަފީއާގެ ލިޔުން</h1>
        <PostListing title="ލޯބިވާ މަންމަ އަށް ޝިފާއަށް އެދި!" link="/lhen/shifa" date="21 އޯގަސްޓް 2020" />
        <PostListing title="ހިއްވަރުކުރޭ!" link="/lhen/hiyvarukurey" date="9 ސެޕްޓެމްބަރު 2020" />
        <PostListing title="މަންމަ ދަރުމަވަންތަ ހޮސްޕިޓަލުގެ 11 ވަނަ ފަންގިފިލާ ގައި..." link="/lhen/dharumavantha" date="29 ސެޕްޓެމްބަރު 2020" />
        <PostListing title="ހާދަރަނގަޅޭ ޝުކުރިޔާ!" link="/lhen/shukuriyya" date="10 އޮކްޓޯބަރު 2020" />
        <PostListing title="މަންމަ ގެ ދަރިން" link="/lhen/dharin" date="3 ނޮވެމްބަރު 2020" />
        <PostListing title="ޅަފަތުގެ ހިޔާ" link="/lhen/lhafathuge" date="14 ނޮވެމްބަރު 2020" />
        <PostListing title="އަޅެފަހެ ކޮރޯނާ" link="/lhen/corona" date="19 ނޮވެމްބަރު 2020" />
        <PostListing title="އިންތިހާ!" link="/lhen/inthihaa" date="27 ނޮވެމްބަރު 2020" />
        <PostListing title="ކީއްވެގެންހޭ؟" link='/lhen/keevegenhey' date="29 ނޮވެމްބަރު 2020" />
        <PostListing title="މިސް ވަނީ!" link="lhen/misvanee" date="1 ޑިސެމްބަރު 2020"/>
      </div>
    </div>
  );
}

export default HomePage;

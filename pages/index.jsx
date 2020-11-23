import { Global } from "@emotion/core";
import Head from "next/head";

const globalStyles = {
    body: {
        fontFamily: "MV_Typewriter",
        textAlign: "right",
        direction: "rtl",
        fontSize: "18px",
        letterSpacing: "0.5px",
        color: "#1B2830",
        background: "#FDFDFD",
        lineHeight: "1.5em",
    },
    h1: {
        lineHeight: "1.5em",
    }
}

const pageStyles = {
    maxWidth: "360px",
    margin: "0 auto",
    marginTop: "2em",
    padding: "2em",
}

function HomePage() {
    return ( 
        <div css={pageStyles}>
            <Head>
                <title>Aishath Shafeeu | އައިޝަތު ޝަފީއު</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta httpEquiv="content-type" content="text/html; charset=utf-8"></meta>
            </Head>
            <Global styles={globalStyles} />
            <h1>ހާދަރަނގަޅޭ ޝުކުރިޔާ!</h1>
            <p>ތިޔަކުރާ ހިތްވަރު ދަރިންނޭ ހާދަ ރަނގަޅޭ ޝުކުރިޔާ!</p>
            <p>ވިޔަނުވާ ގޮތުގައި ތިހެން ދެމިގެން ތިބޭތީ ޝުކުރިޔާ!</p>
            <br />
            <p>ދެއިރު ދެދަޅަށް ތިޔަގޮތަށް ހާލަތު ބަލައި</p>
            <p>ފެއިލް ނުމެކޮށް ތިޔަގޮތަށް އަޕްޑޭޓް ތައް</p>
            <p>ކުރެވެމުން ދިއުމީ ކިހާ ބޮޑު ނިޢުމަތެއް</p>
            <p>މަންމަ ހިތް އުފަލުން ފުރޭނޭ ޝުކުރިޔާ!</p>
            <br />
            <p>ތިބެލުމަށް އެ ދުނަސް އެ ލޯބި މަންމަގެ ވަށައި</p>
            <p>ތިބެލެވެން ނެތްކަމުވިއަސް އެގޮތަށް އެދޭ</p>
            <p>ހިތުގައެން މެން އަބަދު އެކަމާ ފިކުރު ވެވި</p>
            <p>ޒިކުރު ކުރަމުން ގެން ދެވޭތީ ޝުކުރިޔާ!</p>
            <br />
            <p>ބޭބެޔާ އި ޝަފީޢު ނަގާ ލީޑަރޝިޕް</p>
            <p>ރޭގަނޑާއި ދުވާލު ކައިރީގައި ތިބެން</p>
            <p>ހޭދަޔާ އި ކުރެވޭ މަސައްކަތު އަގުވަޒަން</p>
            <p>ހޭކުރާނީ ކިހިނަކުން ހޭ ޝުކުރިޔާ!</p>
            <br />
            <p>މަންމައަށް ހެޔޮރަޙްމަތަށް އެދި ކުރެވެމުން ދާ ހެޔޮދުޢާ</p>
            <p>މަންމައަށް ކެނޑިނޭޅި ލިބެމުންދާ ލޯތްބާ ކެއާރ</p>
            <br />
            <p>މަންމައަށް ކެތްވާގޮތަށް ލިބެމުން އެދާ ހެޔޮހާ ޝިފާ</p>
            <p>ވަންތަކުޅަދުން ޖައްލަރައްބަށް ޙަމްދުކުރަމުންޝުކުރިޔާ!</p>
            <br/>
            <p>އައިޝަތު ޝަފީއު</p>
        </div>
    );
}

export default HomePage;

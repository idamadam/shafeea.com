import Lhen from "../../components/lhen";

const TwoRows = ({ children }) => (
  <div
    css={{
      "@media(min-width: 50ch)": {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      },
    }}
  >
    {children}
  </div>
);

const Verse = ({ children }) => (
  <div css={{ padding: "2em 0" }}>{children}</div>
);

const Corona = () => (
  <Lhen>
    <h1>އަޅެފަހެ ކޮރޯނާ!</h1>
    <div>
      <Verse>
        <TwoRows>
          <p>ދެހާސް ވިހި ތަސައްވަރު ކުރީ ކާކު ހޯދާ</p>
          <p>ކިހާ ދެރަ ކަމެއް ހޭ ކުރީ ތިޔަ ކޮރޯނާ</p>
        </TwoRows>
        <TwoRows>
          <p>އެހާސް ގިނަ އަދަދު ދުނިޔެއިން ކޮށް ފަނާ</p>
          <p>ކިހާ ދެރަ ކަމެއް ހޭ ކުރީ ތިޔަ ކޮރޯނާ</p>
        </TwoRows>
      </Verse>
      <Verse>
        <TwoRows>
          <p>މަށަށް ޅެންބަހުން ޅެން ހަދަން ދަސްވެ ރޯނާ</p>
          <p>ތަށަށް ކޮންކަމެއް ހޭދިނީ މޮޅު ކޮރޯނާ</p>
        </TwoRows>
        <TwoRows>
          <p>މަށަންދަތި ހިފައިގެން ނުކުތުމަށް ހެ ރޯނާ</p>
          <p>ވަޒަން ސާފުކުރުމަށް އެންގި ދޮތަ ޔޭ ކޮރޯނާ</p>
        </TwoRows>
      </Verse>
      <Verse>
        <TwoRows>
          <p>ތަދެއް ނުފިލައޭ ދިން މިވޭން ފަހެ ކޮރޯނާ</p>
          <p>ހަނދެއް ފަދަ ދަރިންވެސް ނުފެނި ވާތި ގޯނާ</p>
        </TwoRows>
        <TwoRows>
          <p>އަތެއްނުމެލެވޭ ސާފުނުވެ ގައިގަ މޫނާ</p>
          <p>ކެތެއްދެން ނުވާނޭ މިހެން ދެން ކޮރޯނާ</p>
        </TwoRows>
      </Verse>
      <Verse>
        <TwoRows>
          <p>ކޮބައިހޭ ނެތޭ ވެކްސިނެއް އަދި ކޮރޯނާ</p>
          <p>ކޮބައިހޭ މޮޅެއްވެވިފަ އުޅެއުޅެ ވެރޯނާ</p>
        </TwoRows>
        <TwoRows>
          <p>ކޮބައި ބާވައޭ ވާނެ ގޮތަކީ ކޮރޯނާ</p>
          <p>ކޮބައިހޭ ފިލާނޭ ދުވަހަކީ މިރޯނާ</p>
        </TwoRows>
      </Verse>
      <Verse>
        <TwoRows>
          <p>ރޮވޭ ގިސްލެވޭ ދިން އަސަރު ތައް ކޮރޯނާ</p>
          <p>ރޮވޭނޭ ނެ ނޫން ހޭ ފެނިފަ މަންމަ ރޯނާ</p>
        </TwoRows>
        <TwoRows>
          <p>ކޮބައިހޭ ކުށެއް އަހަރެމެން ކުޅަ ވެ ރޯނާ</p>
          <p>ފިލާނީ ކިހިނަކުން ދުނިޔެ އިން ކޮރޯނާ</p>
        </TwoRows>
      </Verse>
    </div>
  </Lhen>
);

export default Corona;

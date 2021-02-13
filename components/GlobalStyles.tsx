import { Global } from "@emotion/core";

const styles = {
  body: {
    fontFamily: "MV_Typewriter",
    textAlign: "right" as const,
    direction: "rtl" as const,
    fontSize: "18px",
    letterSpacing: "0.5px",
    color: "#1B2830",
    background: "#F9EFEF",
    lineHeight: "1.5em",
  },
  h1: {
    lineHeight: "1.5em",
  },
  a: {
    textDecoration: "none",
    color: "#AF3B42",
    '&:hover': {
      textDecoration: "underline",
    },
  }
};

const GlobalStyles = () => (<Global styles={styles} />);

export default GlobalStyles;

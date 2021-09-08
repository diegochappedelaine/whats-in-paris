import { ThemeProvider } from "styled-components";

export type ThemeType = typeof theme;

const black100 = "#000000";

const grey100 = "#F7FAFC";
const grey200 = "#E8E7E7";
const grey600 = "#718096";
const grey700 = "#4A5568";
const grey800 = "#2D3748";

const primary = "#6B46C1";

export const theme = {
  fontSize: {
    heading1: "60px",
    heading2: "40px",
    heading3: "20px",
    articleHeading: "45px",
    subtitle: "30px",
    textSmall: "14px",
    textMedium: "16px",
    textBig: "18px",
  },
  breakpoints: { mobile: 800 },
  colors: { black100, grey100, grey200, grey600, grey700, grey800, primary },
  boxShadow: { regular: "0px 5px 4px rgba(221, 221, 221, 0.25)" },
};

const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

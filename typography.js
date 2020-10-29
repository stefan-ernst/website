import Typography from "typography";
import bootstrapTheme from 'typography-theme-bootstrap'
// customize defaults
// fairyGates.baseFontSize = "42px"; // was 20px.
bootstrapTheme.baseFontSize = "12px";
bootstrapTheme.bodyGray = 60;
bootstrapTheme.headerWeight = '300';
const typography = new Typography(bootstrapTheme);


// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles();
}

export default typography;
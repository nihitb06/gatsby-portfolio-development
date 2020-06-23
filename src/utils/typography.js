import Typography from 'typography';
import { colors } from './colors.js';

const typography = new Typography({
    baseFontSize: "18px",
    baseLineHeight: 1.44,
    scaleRatio: 2.15,
    blockMarginBottom: 0.75,
    fontDisplay: 'swap',
    googleFonts: [
        {
            name: "Playfair Display",
            styles: ["700"]
        },
        {
            name: "Mr De Haviland",
            styles: ["400"]
        },
        {
            name: "Fira Sans",
            styles: ["400", "400i", "700", "700i"]
        },
    ],
    headerFontFamily: ["Playfair Display", "Mr De Haviland", "serif"],
    bodyFontFamily: ["Fira Sans", "sans-serif"],
    headerColor: colors.colorTextPrimary,
    bodyColor: colors.colorTextSecondary,
    headerWeight: 700,
    bodyWeight: 400,
    boldWeight: 700,
    overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
        h2: {
            "font-family": "Playfair Display",
        },
        a: {
            color: colors.colorPrimary,
            "text-decoration": "none",
        },
        "input, textarea": {
            "border": "0",
            "border-bottom": "2px solid " + colors.colorAccent,
        },
        ".hoverable:hover": {
            "border-bottom": "2px solid " + colors.colorPrimaryLight,
        },
        ".title": {
            color: colors.colorPrimary,
            display: "inline-block",
            "font-family": "Mr De Haviland",
        },
        ".menu": {
            color: colors.colorAccent,
            "font-size": "1.2rem",
            "text-decoration": "none",
        },
        ".active": { 
            color: colors.colorPrimaryLight,
        },
    }),
});

export const { scale, rhythm, options } = typography
export default typography;

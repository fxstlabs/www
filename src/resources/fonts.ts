import {DM_Serif_Display, JetBrains_Mono, Inter, EB_Garamond, Merriweather} from "next/font/google";

export const fontDisplayDefault = DM_Serif_Display({
    variable: "--font-display",
    weight: "400",
    subsets: ["latin"],
});

export const fontSerifDefault = EB_Garamond({
    variable: "--font-serif",
    subsets: ["latin"],
});

export const fontSansDefault = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
});

export const fontMonospaceDefault = JetBrains_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
});

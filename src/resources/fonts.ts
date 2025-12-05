import {DM_Serif_Display, JetBrains_Mono, Noto_Sans, Noto_Serif} from "next/font/google";

export const fontDisplayDefault = DM_Serif_Display({
    variable: "--font-display",
    weight: "400",
    subsets: ["latin"],
});

export const fontSerifDefault = Noto_Serif({
    variable: "--font-serif",
    subsets: ["latin"],
});

export const fontSansDefault = Noto_Sans({
    variable: "--font-sans",
    subsets: ["latin"],
});

export const fontMonospaceDefault = JetBrains_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
});

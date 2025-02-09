import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/quicksand"; // Default weight (400)
import "@fontsource/quicksand/600.css"; // Semi-bold (600)
import "@fontsource/quicksand/700.css"; // Bold (700)

import "@fontsource/lora"; // Default weight (400)
import "@fontsource/lora/600.css"; // Semi-bold (600)
import "@fontsource/lora/700.css"; // Bold (700)

import "@fontsource/caveat"; // Default weight (400)
import "@fontsource/caveat/600.css"; // Semi-bold (600)
import "@fontsource/caveat/700.css"; // Bold (700)

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

const theme = extendTheme({
    config,
    fonts: {
        heading: "'Quicksand', sans-serif",  // Elegant serif for headings
        body: "'Quicksand', sans-serif", // Modern, rounded sans-serif for body text
    },
    colors: {
        whites: {
            alabaster: "#FAFAF8", // Soft warm white
            snow: "#FBFBF9", // Bright but not harsh
            ivory: "#F8F8F5", // Gentle warm white
            ghostWhite: "#F8F8FF", // Cool soft white with a hint of blue
            seashell: "#F1F1EE", // Creamy warm white
        },
        grey: {
            charcoal: '#4c4c4c',
            slight: '#E6E6E4'
        },
            background: {
                100: "#1c3247",
                200: "#182c3f",
                300: "#142637",
                400: "#10202f",
                500: "#0d1b2a", // Main Primary Color
                600: "#0b171f",
                700: "#09131a",
                800: "#070f15",
                900: "#050b10",
            },
            secondary: {
                100: "#2a3857",
                200: "#263450",
                300: "#222f49",
                400: "#1e2b42",
                500: "#1b263b", // Main Secondary Color
                600: "#182234",
                700: "#151e2d",
                800: "#121a26",
                900: "#0f161f",
            },
            accent: {
                100: "#68709e",
                200: "#5e7694",
                300: "#546d8a",
                400: "#4a6380",
                500: "#415a77", // Main Accent Color
                600: "#3a506b",
                700: "#344661",
                800: "#2e3d57",
                900: "#28344d",
            },
            highlight: {
                100: "#a6b7d1",
                200: "#9aacc7",
                300: "#8ea2bd",
                400: "#8298b3",
                500: "#778da9", // Main Highlight Color
                600: "#6b819c",
                700: "#607590",
                800: "#546983",
                900: "#485d77",
            },
            text: {
                100: "#f0f1ef",
                200: "#ecedeb",
                300: "#e8e9e5",
                400: "#e4e5e1",
                500: "#e0e1dd", // Main Background Color
                600: "#c7c8c4",
                700: "#aeafa9",
                800: "#94958f",
                900: "#7b7b75",
            },

    },
    styles: {
        global: {
            ".caveat-font": {
                fontFamily: "'Caveat', cursive", // Define the custom class
            },
        },
            body: {
                bg: "background",
                color: "primary",
            },
        },
    components: {
        Button: {
            baseStyle: {
                fontWeight: "bold",
            },
            variants: {
                solid: {
                    bg: "accent",
                    color: "background",
                    _hover: { bg: "highlight" },
                },
                outline: {
                    borderColor: "accent",
                    color: "accent",
                    _hover: { bg: "highlight", color: "background" },
                },
            },
        },
        Heading: {
            baseStyle: {
                color: "accent",
            },
        },
        Link: {
            baseStyle: {
                color: "highlight",
                _hover: {
                    textDecoration: "underline",
                    color: "accent",
                },
            },
        },
    },
});

export default theme;
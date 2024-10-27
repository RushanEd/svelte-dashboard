import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
    export default {
        content: ['./src/**/*.{html,js,svelte,ts}'],

        theme: {
            extend: {}
        },

        daisyui: {
            themes: [
                {
                    light: {
                        ...require("daisyui/src/theming/themes")["light"],
                        primary: "#000",
                        "primary-content": "#fff",
                        "base-100": "#fff",
                        "base-200": "#eee",
                        "base-300": "#ddd",
                        "base-content": "#111",
                        "--rounded-btn": ".35rem",
                        "error": "#f00"
                    },
                },
                {
                    dark: {
                        ...require("daisyui/src/theming/themes")["dark"],
                        primary: "#fff",
                        "primary-content": "#000",
                        "base-100": "#000",
                        "base-200": "#111",
                        "base-300": "#222",
                        "base-content": "#eee",
                        "--rounded-btn": ".35rem",
                        "error": "#f33"
                    },
                },
            ],
        },

        plugins: [typography, require('daisyui')]
    };

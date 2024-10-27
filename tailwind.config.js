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
            ],
        },

        plugins: [typography, require('daisyui')]
    };

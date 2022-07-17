module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./posts/**/*.mdx",
  ],
  theme: {
    extend: {
      keyframes: {
        scalePulse: {
          "0% 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(160px)", opacity: "0" },
          "15%": { transform: "translateY(-15px)" },
          "20%": { transform: "translateY(0px)", opacity: "1" },
          "80%": { transform: "translateY(0px)" },
          "85%": { transform: "translateY(15px)", opacity: "1" },
          "100%": { transform: "translateY(-160px)", opacity: "0" },
        },
      },
      animation: {
        scalePulse: "scalePulse 1s ease-in-out infinite",
        fadeIn: "fadeIn 200ms ease-in",
        slideUp: "slideUp 5s ease-in-out",
      },
      colors: {
        gray: {
          100: "#e8ebef",
          200: "#bac3cf",
          300: "#a3afbf",
          400: "#8c9aaf",
          500: "#7586a0",
          600: "#62738d",
          700: "#526076",
          800: "#424d5f",
          900: "#323b48",
        },
        white: "var(--white)",
        black: "var(--black)",
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        "font-primary": "var(--font-primary)",
        "font-secondary": "var(--font-secondary)",
        shadow: "var(--shadow)",

        background: "var(--background-color)",
        navbar: "var(--background-color-navbar)",

        "link-color": "var(--link-color)",
        "link-color-hover": "var(--link-color-hover)",
        "link-color-active": "var(--link-color-active)",
        "link-color-visited": "var(--link-color-visited)",
        "link-text": "var(--white)",

        "primary-hover": "var(--primary-hover)",
        "primary-focus": "var(--primary-focus)",
        "primary-active": "var(--primary-active)",
        "primary-after": "var(--primary-after)",
        "primary-faded": "var(--primary-faded)",

        "primary-dark": "var(--primary-dark)",
        "primary-dark-hover": "var(--primary-dark-hover)",
        "primary-dark-focus": "var(--primary-dark-focus)",
        "primary-dark-active": "var(--primary-dark-active)",

        secondary: "var(--secondary)",
        "secondary-hover": "var(--secondary-hover)",
        "secondary-focus": "var(--secondary-focus)",
        "secondary-active": "var(--secondary-active)",
        "secondary-faded": "var(--secondary-faded)",

        "secondary-dark": "var(--secondary-dark)",
        "secondary-dark-hover": "var(--secondary-dark-hover)",
        "secondary-dark-focus": "var(--secondary-dark-focus)",
        "secondary-dark-active": "var(--secondary-dark-active)",

        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "accent-focus": "var(--accent-focus)",
        "accent-active": "var(--accent-active)",
        "accent-faded": "var(--accent-faded)",

        success: "var(--success)",
        "success-hover": "var(--success-hover)",
        "success-focus": "var(--success-focus)",
        "success-active": "var(--success-active)",

        info: "var(--info)",
        "info-hover": "var(--info-hover)",
        "info-focus": "var(--info-focus)",
        "info-active": "var(--info-active)",

        warning: "var(--warning)",
        "warning-hover": "var(--warning-hover)",
        "warning-focus": "var(--warning-focus)",
        "warning-active": "var(--warning-active)",

        error: "var(--error)",
        "error-hover": "var(--error-hover)",
        "error-focus": "var(--error-focus)",
        "error-active": "var(--error-active)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

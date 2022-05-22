import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <script dangerouslySetInnerHTML={{ __html: initializeTheme }}></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

const initializeTheme = `(function() {
  ${setInitalColorMode.toString()}
  setInitalColorMode();
})()`;

function setInitalColorMode() {
  function getInitialColorMode() {
    const persistedColorPreference = window.localStorage.getItem("theme");
    const hasPersistedPreference = typeof persistedColorPreference === "string";
    
    // If the user has explicitly chosen light or dark,
    // let's use it. Otherwise, this value will be null.
    if (hasPersistedPreference) {
      return persistedColorPreference;
    }
    
    // If they haven't been explicit, let's check the media query
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const hasMediaQueryPreference = typeof preference.matches === "boolean";
    console.log(persistedColorPreference, hasPersistedPreference, preference, hasMediaQueryPreference);
    if (hasMediaQueryPreference) {
      return preference.matches ? "dark" : "light";
    }
    
    // If they are using a browser/OS that doesn't support
    // color themes, let's default to 'light'.
    return "light";
  }

  const currentColorMode = getInitialColorMode();
  const element = document.documentElement;
  element.style.setProperty("--initial-color-mode", currentColorMode);

  if (currentColorMode === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

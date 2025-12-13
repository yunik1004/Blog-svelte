import { writable } from "svelte/store";

export const THEME_KEY = "theme";
export const LIGHT_THEME = "caramellatte";
export const DARK_THEME = "sunset";

export const isDarkMode = writable(false);

export function detectDarkMode(): boolean {
  const theme = localStorage.getItem(THEME_KEY);
  const mediaQuery = matchMedia("(prefers-color-scheme: dark)");

  let isDark: boolean;
  if (theme === LIGHT_THEME || theme === DARK_THEME) {
    isDark = theme === DARK_THEME;
  } else {
    isDark = mediaQuery.matches;
  }

  isDarkMode.set(isDark);

  return isDark;
}

export function updateTheme() {
  const isDark = detectDarkMode();
  document.documentElement.setAttribute("data-theme", isDark ? DARK_THEME : LIGHT_THEME);
}

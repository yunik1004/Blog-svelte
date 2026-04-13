import { describe, it, expect, beforeEach, vi } from "vitest";
import { get } from "svelte/store";
import {
  detectDarkMode,
  updateTheme,
  isDarkMode,
  THEME_KEY,
  LIGHT_THEME,
  DARK_THEME,
} from "../src/lib/theme";

const mockMatchMedia = (matches: boolean) => {
  vi.stubGlobal("matchMedia", vi.fn().mockReturnValue({ matches }));
};

const store: Record<string, string> = {};
const localStorageMock = {
  getItem: (key: string) => store[key] ?? null,
  setItem: (key: string, value: string) => {
    store[key] = value;
  },
  removeItem: (key: string) => {
    delete store[key];
  },
  clear: () => {
    Object.keys(store).forEach((k) => delete store[k]);
  },
};

beforeEach(() => {
  vi.stubGlobal("localStorage", localStorageMock);
  localStorageMock.clear();
  document.documentElement.removeAttribute("data-theme");
  isDarkMode.set(false);
});

describe("detectDarkMode", () => {
  it("returns true when localStorage is set to dark theme", () => {
    localStorage.setItem(THEME_KEY, DARK_THEME);
    mockMatchMedia(false);
    expect(detectDarkMode()).toBe(true);
    expect(get(isDarkMode)).toBe(true);
  });

  it("returns false when localStorage is set to light theme", () => {
    localStorage.setItem(THEME_KEY, LIGHT_THEME);
    mockMatchMedia(true);
    expect(detectDarkMode()).toBe(false);
    expect(get(isDarkMode)).toBe(false);
  });

  it("falls back to system preference when no localStorage value", () => {
    mockMatchMedia(true);
    expect(detectDarkMode()).toBe(true);
  });

  it("falls back to system preference when localStorage has invalid value", () => {
    localStorage.setItem(THEME_KEY, "invalid");
    mockMatchMedia(false);
    expect(detectDarkMode()).toBe(false);
  });

  it("updates isDarkMode store", () => {
    localStorage.setItem(THEME_KEY, DARK_THEME);
    mockMatchMedia(false);
    detectDarkMode();
    expect(get(isDarkMode)).toBe(true);
  });
});

describe("updateTheme", () => {
  it("sets data-theme to dark theme when dark mode", () => {
    localStorage.setItem(THEME_KEY, DARK_THEME);
    mockMatchMedia(false);
    updateTheme();
    expect(document.documentElement.getAttribute("data-theme")).toBe(DARK_THEME);
  });

  it("sets data-theme to light theme when light mode", () => {
    localStorage.setItem(THEME_KEY, LIGHT_THEME);
    mockMatchMedia(false);
    updateTheme();
    expect(document.documentElement.getAttribute("data-theme")).toBe(LIGHT_THEME);
  });
});

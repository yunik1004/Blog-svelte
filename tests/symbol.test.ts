import { describe, it, expect } from "vitest";
import { get_symbol } from "../src/lib/symbol";

describe("get_symbol", () => {
  const validSymbols = [
    "art",
    "book",
    "building",
    "game",
    "music",
    "paper",
    "rocket",
    "school",
    "university_hat",
  ];

  it.each(validSymbols)("returns a non-empty string for '%s'", (name) => {
    expect(get_symbol(name)).toBeTruthy();
  });

  it("returns empty string for unknown symbol", () => {
    expect(get_symbol("unknown")).toBe("");
  });

  it("returns empty string for empty string", () => {
    expect(get_symbol("")).toBe("");
  });
});

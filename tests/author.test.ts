import { describe, it, expect } from "vitest";
import { splitAuthor } from "../src/lib/author";

describe("splitAuthor", () => {
  it("detects name in the middle", () => {
    const result = splitAuthor("John, Inkyu Park, Jane");
    expect(result).toEqual({ hasName: true, before: "John, ", after: ", Jane" });
  });

  it("detects name at the start", () => {
    const result = splitAuthor("Inkyu Park, John");
    expect(result).toEqual({ hasName: true, before: "", after: ", John" });
  });

  it("detects name at the end", () => {
    const result = splitAuthor("John, Inkyu Park");
    expect(result).toEqual({ hasName: true, before: "John, ", after: "" });
  });

  it("detects name when author is only the name", () => {
    const result = splitAuthor("Inkyu Park");
    expect(result).toEqual({ hasName: true, before: "", after: "" });
  });

  it("returns hasName false when name is absent", () => {
    const result = splitAuthor("KRAFTON");
    expect(result).toEqual({ hasName: false, before: "", after: "" });
  });

  it("returns hasName false for empty string", () => {
    const result = splitAuthor("");
    expect(result).toEqual({ hasName: false, before: "", after: "" });
  });
});

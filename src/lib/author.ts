const NAME = "Inkyu Park";

export function splitAuthor(author: string): {
  hasName: boolean;
  before: string;
  after: string;
} {
  if (!author.includes(NAME)) {
    return { hasName: false, before: "", after: "" };
  }
  const parts = author.split(NAME);
  return { hasName: true, before: parts[0], after: parts[1] ?? "" };
}

const isValidFileBuffer = require("./test");

describe("File Buffer Validator", () => {
  test("validates a small file is within size limits", async () => {
    const result = await isValidFileBuffer("./image/smalldata.txt");
    expect(result).toBe(true);
  });
  test("validates that the file buffer is within size limits", async () => {
    const result = await isValidFileBuffer(
      "./image/Screenshot 2024-03-25 132302.png"
    );
    expect(result).toBe(true);
  });
  test("rejects an empty file", async () => {
    const result = await isValidFileBuffer("./image/empty.png");
    expect(result).toBe(false);
  });
  test("returns false for a non-existent file", async () => {
    const result = await isValidFileBuffer(
      "./image/Screenshot 20242-03-25 132302.png"
    );
    expect(result).toBe(false);
  });
  test("rejects a large file due to exceeding size limits", async () => {
    const result = await isValidFileBuffer("./image/bigdata.txt");
    expect(result).toBe(false);
  });
});

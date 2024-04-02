const fs = require('fs').promises;

async function isValidFileBuffer(filePath) {
  try {
    const data = await fs.readFile(filePath);
    return data.length > 0 && data.length < 5 * 1024 * 1024;
  } catch (error) {
    console.error("Error reading file:", error);
    return false;
  }
}

module.exports = isValidFileBuffer;
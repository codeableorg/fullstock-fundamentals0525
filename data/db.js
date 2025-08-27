import fs from "node:fs/promises";

export async function readDB() {
  try {
    const data = await fs.readFile("data/db.json", "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Database read error:", error);
    throw new Error("Failed to read database");
  }
}

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

export async function findAllCategories() {
  try {
    const data = await fs.readFile("data/db.json", "utf8");
    const jsonData = JSON.parse(data);
    return jsonData.categories;
  } catch (error) {
    console.log("UPS!")
    throw new Error("Failed to retrieve categories", error);
  }
}

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

export async function writeDB(data) {
  try {
    await fs.writeFile("data/db.json", JSON.stringify(data, null, 2), "utf8");
  } catch (error) {
    console.error("Database write error:", error);
    throw new Error("Failed to write the database");
  }
}

export async function findAllCategories() {
  try {
    const data = await fs.readFile("data/db.json", "utf8");
    const jsonData = JSON.parse(data);
    return jsonData.categories;
  } catch (error) {
    console.log("UPS!");
    throw new Error("Failed to retrieve categories", error);
  }
}


export function getNextId(collection) {
  return collection.length > 0
    ? Math.max(...collection.map((item) => item.id)) + 1
    : 1;
}
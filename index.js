import express from "express";
import { readDB } from "./data/db.js";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public")); // /


app.get("/", async (req, res) => {
  const databaseInfo = await readDB();
  const categories = databaseInfo.categories;
  res.render("home", { categories });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});

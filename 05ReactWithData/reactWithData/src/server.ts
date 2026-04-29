import express from "express";
import cors from "cors";
import router from "./routes/items";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/items", router);

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
import express from "express";
import { healthRouter } from "./routes/health";
import { summariseRouter } from "./routes/summarise";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/health", healthRouter);
app.use("/summarise", summariseRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

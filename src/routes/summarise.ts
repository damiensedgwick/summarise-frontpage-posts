import express from "express";

import { summariseHandler } from "@/handlers/summarise";

const router = express.Router();

router.post("/posts", summariseHandler.summarisePosts);

export { router as summariseRouter };

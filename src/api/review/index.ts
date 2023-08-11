import { Router } from "express";

import { createReviewHandler } from "./review.controller";

const router = Router();

router.post("/", createReviewHandler);

export default router;
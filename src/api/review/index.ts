import { Router } from "express";

import { createReviewHandler } from "./review.controller";
import { isAuthenticated } from "../../auth/auth.controller";

const router = Router();

router.post("/", createReviewHandler);

export default router;
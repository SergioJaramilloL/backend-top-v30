import { Router } from "express";
import { handleCheckout } from "./checkout.controller";

const router = Router();

router.post("/", handleCheckout);

export default router;
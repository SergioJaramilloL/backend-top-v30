import { Router } from "express";
import { healchecktHandler } from "./healthcheck.controller";

const router = Router()

router.get('/', healchecktHandler)

export default router
import { Router } from "express";
import { 
  getAllProductsHandler,
  createProductHandler
} from "./product.controller";

const router = Router()

router.get('/', getAllProductsHandler)
router.post('/', createProductHandler)

export default router
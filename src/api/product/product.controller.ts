import { Request, Response } from 'express'

import { 
  getAllProducts,
  createProduct
} from './product.service'

export const getAllProductsHandler = async (_: Request, res: Response) => {
  const products = await getAllProducts()

  return res.status(200).json(products)
}

export const createProductHandler = async (req: Request, res: Response) => {
  const data = req.body

  const productCreated = await createProduct(data)

  return res.status(201).json(productCreated)
}
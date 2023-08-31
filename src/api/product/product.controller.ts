import { Request, Response } from 'express'

import { 
  getAllProducts,
  createProduct
} from './product.service'

export const getAllProductsHandler = async (req: Request, res: Response) => {
  try {
    const { page: pageQuery, pageSize: pageSizeQuery } = req.query
    const page = parseInt(pageQuery as string) || 1
    const pageSize = parseInt(pageSizeQuery as string) || 5
    
    const { products, totalCount } = await getAllProducts(page, pageSize)
    const totalPages = Math.ceil(totalCount / pageSize)
    
    if(page > totalPages) {
      throw new Error('Page not found')
    }
    
    const newResponse = {
      pageInfo: {
        currentPage: page,
        pageSize,
        totalPages,
        totalCount
      },
      products
    }
    
    res.status(200).json({ message: 'Products found', response: newResponse })
  } catch (error: any) {
    res.status(401).json({  message: error.message})
  }
}

export const createProductHandler = async (req: Request, res: Response) => {
  const data = req.body
  try {

    const productCreated = await createProduct(data)

    return res.status(201).json(productCreated)

  } catch (error: any) {
    res.status(401).json(error.message)
  }
}
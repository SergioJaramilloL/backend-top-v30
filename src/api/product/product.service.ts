import { PrismaClient } from '@prisma/client'

import { Product } from './product.types'

const prisma = new PrismaClient()

export const getAllProducts = async () => {
  const products = await prisma.product.findMany({
    include: {
      reviews: {
        select: {
          id: true,
          text: true,
          rating: true,
        }
      }
    }
  })

  return products
}

export const createProduct = async (input: Product) => {
  const product = await prisma.product.create({
    data: {
      name: input.name,
      price: input.price,
      description: input.description,
      stock: 100
    }
  })

  return product
}
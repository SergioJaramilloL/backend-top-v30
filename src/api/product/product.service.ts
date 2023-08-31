import { PrismaClient } from '@prisma/client'

import { Product } from './product.types'

const prisma = new PrismaClient()

export const getAllProducts = async (page: number, pageSize: number) => {
  const skip = (page - 1) * pageSize


  const [ products, totalCount ] = await Promise.all([
    prisma.product.findMany({
      skip,
      take: pageSize,
      include: {
        reviews: {
          select: {
            id: true,
            text: true,
            rating: true,
          }
        }
      }
    }),
    prisma.product.count()
  ])


  return { products, totalCount }
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
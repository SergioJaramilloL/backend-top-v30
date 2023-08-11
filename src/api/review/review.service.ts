import { PrismaClient } from '@prisma/client';

import { Review } from './review.types';

const prisma = new PrismaClient();

export const createReview = async (input: Review) => {
  const review = await prisma.review.create({
    data: {
      text: input.text,
      rating: input.rating,
      product: {
        connect: {
          id: input.productId,
        },
      },
    },
  });

  return review;
}
import { Request, Response } from 'express'

import { createReview } from './review.service'

export const createReviewHandler = async (req: Request, res: Response) => {
  const data = req.body

  const review = await createReview(data);

  return res.status(201).json(review)
}

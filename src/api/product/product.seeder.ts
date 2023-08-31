import { faker } from '@faker-js/faker' 


export const productSeeder = Array.from({ length: 50 }).map(() => ({
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  price: parseInt(faker.commerce.price()),
  stock: faker.number.int({ min: 0, max: 100 })
}))
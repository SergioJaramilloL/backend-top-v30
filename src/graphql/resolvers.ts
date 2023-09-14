import productResolver from "./products/product.resolver"

const resolvers = {
  Query: {
    helloWorld: () => 'Hello World!',
    ...productResolver.query,
  },
  Mutation: {
    ...productResolver.mutation,
  }
}

export default resolvers
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Review {
    id: ID!
    text: String
    rating: Int
    product: Product
    productId: String
  }

  type Product {
    id: ID!
    "The name of the product"
    name: String
    "The description of the product"
    description: String
    "The price of the product"
    price: Int
    "The stock of the product"
    stock: Int
    "The reviews of the product"
    reviews: [Review]
    createdAt: String
    updatedAt: String
  }

  input productPaginationInput {
    page: Int! 
    pageSize: Int!
  }

  input productInput {
    name: String
    description: String
    price: Int
  }

  type Query {
    "A simple type for getting started!"
    helloWorld: String

    "Fetch all products"
    allProducts(input: productPaginationInput): [Product]
  }


  type Mutation {
    "Create a new product"
    createProduct(input: productInput): Product
  }
`
export default typeDefs
import { getAllProducts, createProduct } from "../../api/product/product.service"

const query = {
  allProducts: async (_: any, { input }: any) => {
    const { products } = await getAllProducts(input.page, input.pageSize)
    return products
  }
}

const mutation = {
  createProduct: async (_: any, { input }: any) => {
    const product = await createProduct(input)
    return product
  }
}

export default { 
  query,
  mutation
}
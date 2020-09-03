import gql from 'graphql-tag'

export const CREATE_NEW_PRODUCT = gql`
mutation CreateProduct($file: Upload!, $name: String!, $price: Int!, $category: String!, $subcategory: String!, $businessId: String!) {
  CreateProduct(input:{
    name: $name,
    price: $price,
    category: $category,
    subcategory: $subcategory,
    businessId: $businessId,
    file: $file
  }) {
    productId
    code
    success
    message
  }
}
`
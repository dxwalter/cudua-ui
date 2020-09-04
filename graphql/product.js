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

export const GET_PRODUCT_BY_BUSINESS_ID = gql`
query getProduct($businessId: String!, $page: Int!){
  GetProductsUsingBusinessId(input:{
    businessId: $businessId,
    page: $page
  }) {
    products {
      id
      name
      price
      primaryImage
      hide
    }
    code
    success
    message
    
  }
}
`

export const GET_PRODUCT_BY_SUBCATEGORY = gql`
query getProducts ($businessId: String!, $subcategoryId: String!, $page: Int!) {
  BusinessGetProductBysubCategory(input: {
    businessId: $businessId,
    subcategoryId: $subcategoryId,
    page: $page
  }) {
    products {
      id
      name
      price
      hide
      reviewScore
      category {
        categoryId
        categoryName
      }
      subcategory {
        subcategoryId
        subcategoryName
      }
      primaryImage
    }
    totalProductsInSubcategoryCount
    code
    success
    message
  }
}
`
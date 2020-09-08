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

export const SHOP_ADMIN_SEARCH_PRODUCT_IN_MANAGER = gql`
query searchProduct($keyword: String!, $businessId: String!){
  BusinessSearchProduct(input: {
    keyword: $keyword,
    businessId: $businessId
  })
  {
    products{
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

export const GET_PRODUCT_BY_ID = gql`
query getproduct($productId: String!) {
  GetProductById(input:{
    productId: $productId,
  })
  {
    product{
      id
      name
      price
      description
      tags {
        tagId
        tagName
      }
      colors {
        colorId
        color
      }
      sizes {
        sizeId
        sizeNumber
      }
      hide
      category{
        categoryId
        categoryName
      }
      subcategory{
        subcategoryId
        subcategoryName
      }
      images
    }
    code
    success
    message
  }
}
`

export const CREATE_PRODUCT_SIZE = gql`
mutation create ($sizes: [String]!, $productId: String!, $businessId: String!){
	CreateProductSizes(input:{
    sizes: $sizes,
    productId: $productId,
    businessId: $businessId
  }) {
    code
    success
    message
  }
}
`
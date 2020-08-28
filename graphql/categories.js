import gql from 'graphql-tag'

export const GET_ALL_CATEGORIES = gql`
query {
  GetAllCategories{
    category{
      id
      categoryName
      subcategories {
        subcategoryId
        subcategoryName
      }
    }
    code
    success
    message
  }
}
`

export const CREATE_BUSINESS_CATEGORY = gql `
mutation Create($businessId: String!, $categoryId: String!, $subcategories: [String]!){
	CreateBusinessCategory(input:{
    businessId: $businessId,
    categoryId: $categoryId,
    subcategories: $subcategories
  }) {
    code
    success
    message 
  }
}
`;
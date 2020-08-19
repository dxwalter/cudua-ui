import gql from 'graphql-tag'

export const CREATE_BUSINESS = gql`
mutation CreateBusinessAccount($name: String!, $username: String!) {
    # remember to pass accessToken in request header
    CreateBusinessAccount(input:{ name: $name, username: $username }) {
        businessDetails{
            businessname
            username
            id
            logo
            description 
            address {
                number
                street
                community
                lga
                state
                country
            }
            contact {
                email
            }
        }
        code
        success
        message
    }
}

`;

export const GET_BUSINESS_CATEGORIES_WITH_SUBCATEGORIES = gql` 
    query GetBusinessCategoryListingWithSubcategories ($businessId: String!) {
        GetBusinessCategoriesWithSubcategory (input: { businessId: $businessId}) {
            businessCategory{
                itemId
                categoryId
                categoryName
                hide
                subcategory {
                    itemId
                    subcategoryId
                    subcategoryName
                    subcategoryProductCount
                    hide
                }
            }
            code
            success
            message
        }
  }
  `

export const HIDE_BUSINESS_SUBCATEGORY = gql`
    mutation HideBusinessSubcategory ($subcategoryId: String!, $businessId: String!, $categoryId: String!) {
        HideSelectedBusinessSubcategory(input:{
            subcategoryId: $subcategoryId,
            businessId: $businessId,
            categoryId: $categoryId
        }) {
            code
            success
            message
        }
    }
`;
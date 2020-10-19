import gql from 'graphql-tag';

export const REGULAR_SEARCH = gql`
query search($queryString: String!, $page: Int!){
  RegularSearch(input:{
    queryString: $queryString,
    page: $page
  }) {
    products {
      id
      name
      price
      reviewScore
      businessId
      primaryImage
    }
    businesses {
      id
      businessname
      logo
      username
      address {
        number
        street
        community
        lga
        state
        country
        busStop
      }
    }
    code
    success
    message
  }
}
`

export const REGULAR_SEARCH_COUNT = gql`
query regularCount($queryString: String!) {
  RegularSearchResultCount(input:{
    queryString: $queryString
  }){
    products
    businesses
    code
    success
    message
  }
}
`
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
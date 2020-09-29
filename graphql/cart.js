
import gql from 'graphql-tag'

export const GET_SIGNED_CART_ITEMS = gql`
query {
  GetCartItems{
    cart {
      itemId
      customer
    	color
      quantity
      size
      product{
        productId
        name
        price
        image
        review
      }
      business {
        businessId
        name
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
    }
    code
    success
    message
  }
}
`

export const GET_ANONYMOUS_CART_ITEMS = gql`
query cart ($anonymousId: String!) {
  AnonymousGetCartItems(input:{
    anonymousId: $anonymousId
  }) {

    cart {
      itemId
      customer
    	color
      quantity
      size
      product{
        productId
        name
        price
        image
        review
      }
      business {
        businessId
        name
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
    }
    code
    success
    message
  }
}

`
import gql from 'graphql-tag'

export const CREATE_NEW_ORDER = gql`
mutation {
  CreateOrder{
    code
    success
    message
    orderId
  }
}
`

export const GET_ORDER_LISTING_FROM_BUSINESS = gql`
query getOrder($businessId: String!) {
  BusinessGetOrders(input:{
    businessId: $businessId,
  }){
    orders {
      newOrder {
        customerName
        customerId
        profilePicture
        orderTime
        orderId
      }
      pendingOrder {
        customerName
        customerId
        profilePicture
        orderTime
        orderId
      }
      clearedOrder{
        customerName
        customerId
        profilePicture
        orderTime
        orderId
      }
    }
    code
    success
    message
  }
}
`
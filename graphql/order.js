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

export const BUSINESS_GET_ORDER_PRODUCTS = gql`
query getProduct($businessId: String!, $customerId: String!, $orderId: String!){
  BusinessGetProductsInOrder(input:{
    businessId: $businessId,
    customerId: $customerId,
    orderId: $orderId
  }) {
    orderDetails {
      name
      productId
      image
      quantity
      price
      size
      color
      businessId
    }
    orderInfo {
      deliveryCharge
      orderStatus
      deliveryStatus
      deliveryTime {
        start
        end
      }
      orderTime
      cancelDeliveryReason
      customerCancelOrder
    }
    customerDetails {
      fullname
      customerId
      phoneNumber
      email
      ratingScore
      address {
        number
        street
        community
        lga
        state
        country
        busStop
      }
      profilePicture
      reviews {
        rating
        description
        author
        logo
        businessId
        customerId
        timeStamp
      }
    }
    code
    success
    message
  }
}
`

export const BUSINESS_REJECT_ORDER = gql`
mutation reject($businessId: String!, $customerId: String!, $orderId: String!, $reason: String!) {
  RejectOrder(input:{
    businessId: $businessId,
    customerId: $customerId,
    orderId: $orderId,
    reason: $reason
  }) {
    code
    success
   	message
  }
}
`

export const BUSINESS_CONFIRM_ORDER = gql`
mutation ConfirmOrder($startTime: String!, $endTime: String!, $businessId: String!, $customerId: String!, $orderId: String!, $deliveryCharge: Int!){
  ConfirmOrder(input:{
    startTime: $startTime,
    endTime: $endTime,
  	businessId: $businessId,
    customerId: $customerId,
    orderId: $orderId,
    deliveryCharge: $deliveryCharge
  }) {
    code
    success
    message
  }
}
`

export const UPDATE_DELIVERY_CHARGE_AND_TIME = gql`
mutation update ($startTime: String!, $endTime: String!, $businessId: String!, $customerId: String!, $orderId: String!, $deliveryCharge: Int!) {
  UpdateDeliveryCharge(input:{
    startTime: $startTime,
    endTime: $endTime,
  	businessId: $businessId,
    customerId: $customerId,
    orderId: $orderId,
    deliveryCharge: $deliveryCharge
  }) {
    code
    success
    message
  }
}
`

export const SEARCH_ORDER_USING_ORDER_ID = gql`
query search($orderId: String!, $businessId: String!){
	SearchForOrder(input:{
		orderId: $orderId,
    businessId: $businessId,
  }) {
    orders {
      customerName
      customerId
      profilePicture
      orderTime
      orderId
    }
    code
    success
    message
  }
}
`
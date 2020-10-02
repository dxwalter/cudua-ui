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
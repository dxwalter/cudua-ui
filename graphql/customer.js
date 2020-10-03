import { concatAST } from 'graphql';
import gql from 'graphql-tag'

export const CREATE_USER_MUTATION = gql`
    mutation CreateUser( $fullname: String!, $email: String!, $password: String!, $anonymousId: String )   {
        createUser(input: {fullname: $fullname, email: $email, password: $password, anonymousId: $anonymousId }) {
            userData {
                fullname
                email
                userId
                review
                accessToken
            }
            code
            success
            message
        }
    }
`;

export const LOGIN_USER = gql`
query Login ($email: String!, $password: String!, $anonymousId: String) {
        userLogin(input:{email: $email, password: $password, anonymousId: $anonymousId}) {   
            userDetails {
                fullname
                email
                phone
                userId
                displayPicture
                review
                email_notification
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
        
            businessDetails {
                id
                businessname
                username
                logo
                coverPhoto
                description
                review
                address {
                    number
                    street
                    community
                    lga
                    state
                    country
                    busStop
                }
                contact {
                    email
                    phone
                    whatsapp {
                        status
                        number
                    }
                }
                subscription {
                    subscriptionDate
                    expiryDate
                    subscriptionId
                    subscriptionType
                }
                businessCategories{
                    itemId
                    categoryId
                    categoryName
                    hide
                    subcategories{
                        itemId
                        subcategoryId
                        subcategoryName
                        hide
                    }
                }
            }
            accessToken
            code
            success
            message
        }
}
`

export const GET_ANONYMOUS_ID = gql`
    query {
        GetAnonymousId{
            anonymousId
            code
            success
            message
        }
    }
`;

export const CREATE_USER_AND_BUSINESS_MUTATION = gql`
    mutation createUserAndBusiness( $fullname: String!, $email: String!, $password: String!, $anonymousId: String, $name: String!, $username: String!, $inviteId: String)   {
        createUserAndBusiness(input: {fullname: $fullname, email: $email, password: $password, anonymousId: $anonymousId, name: $name, username: $username, inviteId: $inviteId}) {
            userData {
                fullname
                email
                businessId
                userId
                accessToken
            }
            businessDetails {
                id
                businessname
                username
                review
                subscription {
                    subscriptionDate
                    expiryDate
                    subscriptionId
                    subscriptionType
                }
            }
            code
            success
            message
        }
    }
`;


export const IS_CUSTOMER_FOLLOWING_BUSINESS = gql`
query checkstatus($businessId: String!) {
    IsCustomerFollowingBusiness(input: {
        businessId: $businessId,
    }) {
        status
        code
        success
        message
    }
}
`

export const FOLLOWBUSINESS = gql`
mutation followBusiness($businessId: String!){
  FollowBusiness(input:{
    businessId: $businessId
  }) {
    code
    success
    message
  }
}
`
export const UNFOLLOWBUSINESS = gql`
mutation UNfollowBusiness($businessId: String!){
    UnfollowBusiness(input:{
        businessId: $businessId
    }) {
        code
        success
        message
    }
}
`

export const GET_BUSINESS_FOLLOWED_BY_CUSTOMER = gql`
query getFollowing($page: Int!){
  Getfollowing(input:{
    page: $page
  }) {
    following {
      businessId
      username
      businessName
      logo
      review 
      businessCategory {
        categoryId
        categoryName 
        hide 
      }
    }
    code
    success
    message
  }
}
`

export const UPLOAD_CUSTOMER_DP = gql`
mutation uploadDp($file: Upload!){
  editCustomerDP(input: {
    file: $file,
  }) {
    imagePath
    code
    success
    message
  }
}
`
export const EDIT_CUSTOMER_NAME = gql`
mutation editName($fullname: String!){
  editCustomerName(input:{
    fullname: $fullname
  }) {
    code
    success
    message
  }
}
`

export const EDIT_CUSTOMER_CONTACT = gql`
mutation editContact($email: String!, $phone: String){
  editUserContact(input:{
    email: $email,
    phone: $phone
  }) {
    code
    success
    message
  }
}
`

export const EDIT_CUSTOMER_PASSWORD = gql`
mutation editpassword($oldPassword: String!, $newPassword: String!){
  editCustomerPassword(input:{
    oldPassword: $oldPassword,
    newPassword: $newPassword
  }) {
    code
    success
    message
  }
}
`

export const EDIT_CUSTOMER_ADDRESS = gql`
mutation address($streetNumber: Int!, $streetId: String!, $busStop: String!) {
 editCustomerAddress(input: {
  streetNumber: $streetNumber,
  streetId: $streetId,
  busStop: $busStop
})  {
  code
  success
  message
}
}
`

export const GET_CUSTOMER_NOTIFICATION = gql`
query getNotification($page: Int!){
  GetCustomerNotification(input:{
    page: $page
  }){
    notification{
      notificationId
      isRead
      owner
      actionId
      type
      message
      timeStamp
    }
    code
    success
    message
  }
}
`
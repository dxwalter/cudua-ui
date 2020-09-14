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
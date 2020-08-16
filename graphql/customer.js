import gql from 'graphql-tag'

export const CREATE_USER_MUTATION = gql`
    mutation CreateUser( $fullname: String!, $email: String!, $password: String!, $anonymousId: String )   {
        createUser(input: {fullname: $fullname, email: $email, password: $password, anonymousId: $anonymousId }) {
            userData {
                fullname
                email
                userId
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
                displaPicture
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
            }
        
            businessDetails {
                id
                businessname
                username
                logo
                coverPhoto
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
                    phone
                    whatsapp {
                        status
                        number
                    }
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
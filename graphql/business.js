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
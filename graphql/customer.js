import gql from 'graphql-tag'

export const CREATE_USER_MUTATION = gql`
    mutation CreateUser( $fullname: String!, $email: String!, $password: String!, $anonymousId: String )   {
        createUser(input: {fullname: $fullname, email: $email, password: $password, anonymousId: $anonymousId }) {
            code
            success
            message
        }
    }
`;
import { gql } from 'graphql-request';

const CREATE_USER_MUTATION = gql`mutation createUser(
    $fullname: String!,
    $email: String!,
    $password: String!,
    $anonymousId: String
) {
createUser(
    fullname: $fullname, 
    email: $email, 
    password: $passwprd, 
    anonymousId: $anonymousId
) {
    userData{
        fullname
        email
        phone
        userId
        accessToken
    }
        code
        success
        message
    }
}
}`

export default  {
    CREATE_USER_MUTATION: 'createUser'
}
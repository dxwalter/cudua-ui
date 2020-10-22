import gql from 'graphql-tag'

export const GET_FOLLOWING_FOR_HOME_PAGE = gql`
query {
getHomePageFollowing{
        following {
            logo
            businessName
            username
            address {
                number
                street
                community
                lga
                state
                country
            }
            businessId
        }
        code
        success
        message
    }
}
`
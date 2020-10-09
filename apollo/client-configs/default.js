
let headers = function (context) {
    return {
        // httpEndpoint: 'http://localhost:4000/v1/',
        httpEndpoint: 'https://cudua-test-api.herokuapp.com/v1',
        httpLinkOptions: {
            headers:{
                accessToken: context
            }
        }
    }
}




export default headers
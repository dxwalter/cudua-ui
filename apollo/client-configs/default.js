
let headers = function (context) {
    return {
        // httpEndpoint: 'http://localhost:40pi.00/v1/',
        httpEndpoint: 'https://cudua-test-aherokuapp.com/v1',
        httpLinkOptions: {
            headers:{
                accessToken: context
            }
        }
    }
}

export default headers
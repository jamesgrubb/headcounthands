

exports.handler = async (event) => {
const data = {
    "name": "James"
}
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
     headers: {
         "Access-Control-Allow-Origin": "*"
     }, 
        body: JSON.stringify(data),
    };
    return response;
};

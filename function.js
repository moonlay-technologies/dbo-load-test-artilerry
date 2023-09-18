function printStatus (requestParams, response, context, ee, next) {
    console.log(`${response.statusCode.uri.path}: ${response.statusCode}`);  
    return next();
}
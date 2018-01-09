'use strict';
if (process.env.HOSTNAME.includes("hostmonster")) {
    const app = require('./app')
    app.listen(8080, () => {
        console.log("Hostmonster listening on 3000 for Zain and Rasheed")
    })
} else {
    const awsServerlessExpress = require('aws-serverless-express')
    const app = require('./app')
    const server = awsServerlessExpress.createServer(app)

    exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);
}

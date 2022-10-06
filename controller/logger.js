const { createLogger, transports, format } = require('winston');


const productLogger = createLogger({

    transports: [

        new transports.File({
            filename: 'product.log',
            level: 'info',
            format: format.combine(format.timestamp(), format.json())
        }),
        new transports.File({
            filename: 'product-error.log',
            level: 'error',
            format: format.combine(format.timestamp(), format.json())

        })
    ]
})

module.exports = {productLogger};
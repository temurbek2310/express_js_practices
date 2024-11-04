//Middleware
//Logger Middleware
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${new Date()}`)

    // Calling the next function is important
    next()
}

module.exports = logger
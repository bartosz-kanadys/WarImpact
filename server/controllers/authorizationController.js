var jwt = require('jsonwebtoken')
var dotenv = require('dotenv')
dotenv.config()

module.exports = {
    async authenticate(req, res, next) {
        const authHeader = req.headers
        const token = authHeader['authorization']
        if (token == null || token == '') return res.status(401).json({ message: 'Unauthorized' })

        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err) return res.status(403).json({ message: 'Token is not valid' })
            req.user = user
            next()
        })
    },

    checkRole(roles) {
        return (req, res, next) => {
            const userRole = req.user.role
            if (roles.includes(userRole)) {
                next()
            } else {
                return res.status(403).json({ message: 'Unauthorized access' });
            }
        }
    }
}



const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken')
var cookieParser = require('cookie-parser');

var dotenv = require('dotenv')
dotenv.config()

var User = require('../database/models/UserModel')
var roles = require('../roles');
const sequelize = require('../database/sequelize');


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
    },

    async register(req, res, next) {
        try {
            await sequelize.transaction(async () => {
                const user = req.body
                const { login, email, password, role } = user

                const isEmailExist = await User.findOne({ where: { email: email } })
                const isLoginExist = await User.findOne({ where: { login: login } })

                if (isEmailExist) {
                    res.status(400).json({
                        status: 400,
                        message: "Email istnieje już w bazie",
                    });
                    return;
                }

                if (isLoginExist) {
                    res.status(400).json({
                        status: 400,
                        message: "Login istnieje już w bazie",
                    });
                    return;
                }

                const saltRounds = 10;

                bcrypt.genSalt(saltRounds, function (err, salt) {
                    bcrypt.hash(password, salt, function (err, hash) {
                        if (err) throw err;
                        User.create({
                            login: login,
                            email: email,
                            password: hash,
                            role: role
                        })
                    });
                });

                res.status(200).json({
                    status: 201,
                    success: true,
                    message: "Zarejestrowano użytkownika"
                });
            })
        } catch (error) {
            res.status(400).json({
                status: 400,
                message: error.message.toString(),
            });
        }
    },

    async login(req, res, next) {
        try {
            const user = req.body
            const { login, password } = user

            const loggingUser = await User.findOne({
                where: { login: login }
            })

            if (!loggingUser) {
                res.status(404).json({
                    status: 404,
                    success: false,
                    message: "User not found"
                })
                return
            }

            const hashedPass = loggingUser?.password

            bcrypt.compare(password, hashedPass, (err, result) => {
                if (err) throw err;
                if (result === true) {
                    const accesToken = jwt.sign(
                        {
                            //id: loggingUser?.id,
                            login: loggingUser?.login,
                            email: loggingUser?.email,
                            role: loggingUser?.role
                        },
                        process.env.TOKEN_SECRET,
                        { expiresIn: '1h' }
                    )

                    const refreshToken = jwt.sign(
                        {
                            //id: loggingUser?.id,
                            login: loggingUser?.login,
                            email: loggingUser?.email,
                            role: loggingUser?.role
                        },
                        process.env.TOKEN_SECRET,
                        { expiresIn: '1h' }
                    )

                    res.cookie('JWT', accesToken, {
                        maxAge: 600,
                        secure: false,
                        httpOnly: true
                    })

                    res.status(200).json({
                        status: 200,
                        success: true,
                        message: "login success",
                        accesToken: accesToken,
                        refreshToken: refreshToken
                    });
                } else {
                    res.status(404).json({
                        status: 404,
                        success: true,
                        message: "login failed",
                    });
                }
            });
        } catch (error) {
            res.status(400).json({
                status: 400,
                message: error.message.toString(),
            });
        }

    }
}



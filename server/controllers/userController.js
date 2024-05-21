const { Transaction } = require('sequelize')
const User = require('../database/models/UserModel')
const sequelize = require('../database/sequelize')


module.exports = {
    async update(req, res, next) {
        const { login, role } = req.body
        try {
            await sequelize.transaction(
                {
                    isolationLevel: Transaction.ISOLATION_LEVELS.SERIALIZABLE
                },
                async () => {
                    const isUserExist = await User.findOne({
                        where: {
                            login: login
                        }
                    })

                    if (isUserExist) {
                        isUserExist.role = role
                        await isUserExist.save()

                        res.status(200).send("Zmieniono role użytkownika " + login + " na " + role)
                    } else {
                        res.status(500).send("Nie ma takiego użytkownika")
                        throw error
                    }
                }
            )
        } catch (error) {
            res.status(500).send("Transation error")
        }
    },

    async delete(req, res, next) {
        const { login } = req.body
        try {
            await sequelize.transaction(
                {
                    isolationLevel: Transaction.ISOLATION_LEVELS.SERIALIZABLE
                },
                async () => {
                    const isUserExist = await User.findOne({
                        where: {
                            login: login
                        }
                    })

                    if (isUserExist) {
                        await User.destroy({
                            where: {
                                login: login
                            }
                        })
                        res.status(200).send("Usunięto użytkownika " + login)
                    } else {
                        res.status(500).send("Nie ma takiego użytkownika")
                        throw error
                    }
                }
            )
        } catch (error) {
            res.status(500).send("Transation error")
        }
    }
}
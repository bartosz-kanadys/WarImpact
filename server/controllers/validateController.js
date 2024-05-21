const { check, validationResult } = require('express-validator')

exports.validateRegister = [
    check('login').trim().not().isEmpty().isLength({ min: 6 }).withMessage('Name is required.'),
    check('password').trim().not().isEmpty().withMessage('Password is required.'),
    check('password').trim().isLength({ min: 8 }).withMessage('Password must be at least 8 characters long.'),
    check('email').trim().not().isEmpty().withMessage('E-mail is required.'),
    check('email').trim().isEmail().withMessage('Invalid e-mail address.')
];

exports.checkValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            data: req.body,
            errors: errors.mapped()
        });
    }
    next();
};
const app = require('express');
const router = app.Router();
const validator = require('validator');
const _ = require('lodash')

const validateInput = (data) => {

    let errors = {};

    if (_.isEmpty(data.email)) {
        errors.email = 'This field is required';
    }

    if (_.isEmpty(data.username)) {
        errors.username = 'This field is required';
    }

    if (_.isEmpty(data.password)) {
        errors.password = 'This field is required';
    }

    if (_.isEmpty(data.passwordConfirmation)) {
        errors.passwordConfirmation = 'This field is required';
    }

    if (_.isEmpty(data.timezone)) {
        errors.timezone = 'This field is required';
    }

    if (data.password !== data.passwordConfirmation) {
        errors.passwordConfirmation = 'Passwords must much';
    }

    return {
        errors,
        isValid: _.isEmpty(errors)
    }

}

router.post('/', (req, res) => {

    const { errors, isValid } = validateInput(req.body);

    let resStatus = isValid ? 200 : 400;

    res.status(resStatus).send({
        errors: isValid,
        data: errors
    });

});

module.exports = router;

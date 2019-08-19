import {
    stringUtil
} from '../utils/string-util';
import userModel from '../models/user-model';

export function index(req, res) {
    const validation = validateIndex(req.body);

    if (!validation.isValid) {
        return res.status(400).json({
            message: validation.message
        });
    }

    const user = new userModel({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });

    user.save(error => {
        if (error) {
            if (error.code === 11000) {
                return res.status(403).json({
                    message: 'Username is already taken'
                });
            }

            return res.status(500).json();
        }

        return res.status(201).json();
    });

    return res.status(201).json();
}

function validateIndex(body) {
    let errors = '';

    if (stringUtil.isEmpty(body.username)) {
        errors += 'Username is required.';
    }

    if (stringUtil.isEmpty(body.password)) {
        errors += 'Password is required.'
    }

    if (stringUtil.isEmpty(body.firstName)) {
        errors += 'First name is required.'
    }

    if (stringUtil.isEmpty(body.lastName)) {
        errors += 'Last name is required.'
    }
    return {
        isValid: stringUtil.isEmpty(errors),
        message: errors
    }
}
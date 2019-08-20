import {
    stringUtil
} from '../utils/string-util';
import userModel from '../models/user-model';
import {
    generateJWT
} from '../services/auth-service';

export function index(req, res) {
    const validation = validateIndex(req.body);

    if (!validation.isValid) {
        return res.status(400).json({
            message: validation.message
        });
    }

    userModel.findOne({
        username: req.body.username.toLowerCase()
    }, (error, user) => {
        if (error) {
            return res.status(500).json();
        }

        if (!user) {
            return res.status(401).json();
        }

        const passwordMatch = userModel.passwordMatch(req.body.password, user.password);

        if (!passwordMatch) {
            return res.status(401).json();
        }

        const token = generateJWT(user);
        return res.status(200).json({
            token: token
        });
    })
}

function validateIndex(body) {
    let errors = '';

    if (stringUtil.isEmpty(body.username)) {
        errors += 'Username is required.';
    }

    if (stringUtil.isEmpty(body.password)) {
        errors += 'Password is required.'
    }

    return {
        isValid: stringUtil.isEmpty(errors),
        message: errors
    }
}
import {
    stringUtil
} from '../utils/string-util';

export function index(req, res) {
    const validation = validateIndex(res.body);

    if (!validation.isValid) {
        return res.status(400).json({
            message: validation.message
        });
    }

    return res.status(204).json();
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
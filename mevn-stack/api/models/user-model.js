import mongoose from 'mongoose';
import {
    stringUtil
} from '../utils/string-util';
import bcrypt from 'bcrypt-nodejs';

const userSchema = new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    password: String
});

userSchema.set('timestamps', true);

userSchema.virtual('fullname').get(function () {
    const firstName = stringUtil.capitalize(this.firstName.toLowerCase());
    const lastName = stringUtil.capitalize(this.lastName.toLowerCase());

    return `${firstName} ${lastName}`;
});

userSchema.statics.passwordMatch = function (password, hash) {
    return bcrypt.compareSync(password, hash);
};

userSchema.pre('save', function (next) {
    this.username = this.username.toLowerCase();
    this.firstName = this.firstName.toLowerCase();
    this.lastName = this.lastName.toLowerCase();

    const unsafePassword = this.password;
    this.password = bcrypt.hashSync(unsafePassword);

    next();
});

export default mongoose.model('user', userSchema);
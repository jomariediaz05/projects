import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    firstName: String,
    middleName: String,
    lastName: String
});

userSchema.set('timestamps', true);
userSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
});
userSchema.pre('save', function (next) {
    next();
});

export default mongoose.model('user', userSchema);
const mongoose = require('mongoose');

const authForm = mongoose.Schema({
    emailId: { type: String, required: true, trim: true, lowercase: true, unique: true },
    password: { type: String, select: false, trim: true },
    verified: { type: Boolean, default: false, },
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    strict: false,
    versionKey: false
});

const authModel = mongoose.model('users_list', authForm);


module.exports = { authModel }
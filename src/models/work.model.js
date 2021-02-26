const mongoose = require('mongoose');

const workForm = mongoose.Schema({
    emailId: { type: String, required: true, trim: true, lowercase: true, unique: true },
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    strict: false,
    versionKey: false
});

const workModel = mongoose.model('work_details', workForm);


module.exports = { workModel }
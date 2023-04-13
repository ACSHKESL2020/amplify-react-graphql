const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, 'Please add company name'],
        maxlength: [100, 'Company name can not be more than 100 characters'],
    },
    position: {
        type: String,
        required: [true, 'Please add position'],
        maxlength: [50, 'Position name can not be more than 50 characters'],
    },
    status: {
        type: String,
        enum: ['interview', 'declined', 'pending'],
        dfault: 'pending',
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user'],
    },
}, { timestamps: true })

module.exports = mongoose.model('Job', JobSchema);

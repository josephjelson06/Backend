const mongoose = require('mongoose');

const AIverseSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        maxlength: 100
    },

    Contact: {
        type: Number,
        required: true,
        maxlength: 10,
        match: [/^\d{10}$/, 'Please fill a valid contact number']
    },

    Email: {
        type: String,
        required: true,
        maxlength: 30,
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },

    Branch: {
        type: String,
        required: true,
        maxlength: 100
    },


    Year: {
        type: String,
        required: true,
        maxlength: 30
    },

    Event: {
        type: String,
        required: true,
        maxlength: 30
    },

    Team_Size: {
        type: String,
    },

    Date: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Participants', AIverseSchema);


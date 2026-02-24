
const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true,
    },
    email: String,
    password: String,
    picture : {
        type: String,
        default: "default.png"
    },
    product:{
            type: Array,
            default: []
    },
    gstin: String,
    
});

module.exports = mongoose.model('owner',ownerSchema);



const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true,
    },
    email: String,
    password: String,
    cart:{
        type: Array,
        default: []
    },
    isadmin: Boolean,
    picture : {
        type: String,
        default: "default.png"
    },
    orders:{
            type: Array,
            default: []
    },
    contact: Number,
    
});

module.exports = mongoose.model('user',userSchema);


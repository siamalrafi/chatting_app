const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        pi: { type: String, required: true, default: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' },
    },
    {
        timestamps: true,
    });


const User = mongoose.model("User", userSchema);

//  Export module 
module.exports = User;

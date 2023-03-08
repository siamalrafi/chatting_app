const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
    {
        chatName: {
            type: String, trim: true,
            isGroupChat: { type: Boolean, default: false }
        },
        users: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }],
        latestMassage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Massage",
        },
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timeTamps: true,
    }
);

const chat = mongoose.model('chat', chatModel);

module.exports = chat;



// chatName
// isGroupChat
// users
// latestMassage
// groupAdmin



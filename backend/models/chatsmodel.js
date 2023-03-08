const mongoose = require("mongoose");

const chatModle = mongoose.Schema(
    {
        chatName: {
            type: String, trim: true,
            isGroupChat: { type: Boolean, default: false }
        },
        users: [{
            type: mongoose.Schema.Type.ObjectId,
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
)





// chatName
// isGroupChat
// users
// latestMassage
// groupAdmin



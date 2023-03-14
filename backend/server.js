const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");
const connectDB = require("./config/db");


dotenv.config();
connectDB();
const app = express();
app.get("/", (req, res) => {
    res.send("API Success!");
});


app.get("/api/chat", (req, res) => {
    res.send(chats)
});
app.get("/api/chat/:id", (req, res) => {
    const singleChat = chats.find((chat) => chat._id === req.params.id)
    res.send(singleChat)
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server started on PORT:${port}`));
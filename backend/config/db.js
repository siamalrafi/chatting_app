const mongoose = require("mongoose");


const connectDB = async () => {
    try {

        const conn = await mongoose.connect(`mongodb+srv://chatting_app:mAkVSFEBNiOMVo54@cluster0.ksaovkw.mongodb.net/?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB Connected : ${conn.connection.host}`);

    } catch (error) {
        console.log(`Error ${error.massage}`);
        process.exit();
    }
}

module.exports = connectDB;

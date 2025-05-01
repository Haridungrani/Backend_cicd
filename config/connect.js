require('dotenv').config();
const mongoose = require('mongoose');

const dbConnect = async () => {
    console.log("Function Called");
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB Connected');
    } catch (err) {
        console.error("Cannot connect to DB. Internal server error:", err);
    }
};

module.exports = dbConnect;

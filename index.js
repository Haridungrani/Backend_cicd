const express = require("express");
const app = express();

const userRoutes = require("./routes/User");

const dbConnect = require("./config/connect");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");

// dotenv.config();
require('dotenv').config();
const PORT = process.env.PORT || 4000;

//database connect
dbConnect();


//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "*", // Allows all origins
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true
}));

//routes
app.use("/api/v1/auth", userRoutes);


app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....on my web site'
	});
});

app.get("/api/testing", (req, res) => {
	return res.json({
		success:true,
		message:'	22DIT013 is testing the server and this is my first API'
	});
});

app.get("/api/new1", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running and this is bhargav dugrani 22DIT013'
	});
});

app.get("/api/new2", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running and this is ci cd pipeline automation:website deplyment'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`);
  });

const classroutes = require('./routes/Class.route')

app.use('/class',classroutes)

const postroutes = require('./routes/Post.route')

app.use('/api/v1/post',postroutes)

const awsRoute = require('./routes/Aws.route')

app.use('/api/v1/aws',awsRoute)

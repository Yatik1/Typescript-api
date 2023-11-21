import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from 'cors';
import mongoose from 'mongoose' 

const app = express()

app.use(cors({
    credentials :true,
}))

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);
server.listen(8080 , () => {
    console.log("Server is running on PORT 8080")
})

const MONGO_URL = 'mongodb+srv://yatiksrivastava1:3zZ0JJ1nM12E5fYX@cluster0.ye1pw1n.mongodb.net/?retryWrites=true&w=majority'

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL)
 .then(() => console.log('Database is connected ! '))
 .catch((err) => console.log("Error" ,err))
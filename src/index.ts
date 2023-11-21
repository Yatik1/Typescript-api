import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from 'cors';
import mongoose from 'mongoose' 
import router from "./router";

const app = express()

const PORT = 8080

app.use(cors({
    credentials :true,
}))

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);
server.listen(PORT , () => {
    console.log(`Server is running on PORT ${PORT}`)
})

const MONGO_URL = 'mongodb+srv://yatiksrivastava1:3zZ0JJ1nM12E5fYX@cluster0.ye1pw1n.mongodb.net/?retryWrites=true&w=majority'

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL)
 .then(() => console.log('Database is connected ! '))
 .catch((err) => console.log("Error" ,err))

 app.use('/' , router())
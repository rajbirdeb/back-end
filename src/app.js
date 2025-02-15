import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app= express();

app.use(cors()); 

app.use(express.json({limit:"20kb"})); //middleware that handles data in json format
app.use(express.urlencoded()); //middleware that is handling data in url format
app.use(express.static("public")); // send the file in the public folder when the user hit the url /public/filename without defining the routes
app.use(cookieparser());







export default app
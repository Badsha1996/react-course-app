import express from "express";
import bodyParser from "body-parser"
import cors from "cors"

import courseRoutes from "./routes/course.js"

const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(cors())

app.use("/", courseRoutes)
app.all("*", (req,res)=> res.send("This does not exist!"))
app.get("/",(req, res)=>res.send("hello world")).listen(port,
    ()=>{
        console.log("server is running")
    })
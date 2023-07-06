const express=require("express")
const {connection}=require("./Config/db.js")
const {bookRouter}=require("./Routes/BookRoutes.js")
const cors=require("cors")
require("dotenv").config()



const app = express()

app.use(express.json())

app.use(cors())



app.get("/", (req,res)=>{

       res.send("Welcome to home page")
})


app.use("/book",bookRouter)




app.listen(process.env.PORT, async()=>{

        try {
             await connection
             console.log("Connected to database")

        } catch (error) {
            
            console.log({"msg":error.message})

        }

        console.log("Server is Running at",process.env.PORT)
})
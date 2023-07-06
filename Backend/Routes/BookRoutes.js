const express = require("express");
const {BookModel}=require("../Model/Book.model")

const bookRouter = express.Router();

bookRouter.get("/books", async (req, res) => {

             try {
                 
               const allBook= await BookModel.find();

                  res.status(200).send(allBook)

             } catch (error) {

                console.log({"msg":error.message})
                
             }
});



bookRouter.post("/addbook", async (req, res) => {

    try {

        const bookDetail= req.body
        
      const saveBook= new BookModel(bookDetail);

          await saveBook.save()

         res.status(200).send({"msg":"Book added successfully"})

    } catch (error) {

        console.log({"msg":error.message})
        res.send("error")
       
    }
});




bookRouter.delete("/delete_book/:id", async (req, res) => {

    try {

        const {_id}= req.body
        

          await  BookModel.findByIdAndDelete(_id)

         res.status(200).send({"msg":"Book deleted successfully"})

    } catch (error) {

        console.log({"msg":error.message})
        res.send("error")
       
    }
});


bookRouter.get("/filter_book", async (req, res) => {

    try {

        const {genre}= req.body
        

        const filter_book= await BookModel.find({genre:genre})

         res.status(200).send(filter_book)

    } catch (error) {

        console.log({"msg":error.message})
        res.send("error")
       
    }
});


bookRouter.get("/sort_book", async (req, res) => {


// Sort, skip, limit
// db.coll.find({}).sort({"year": 1, "rating": -1}).skip(10).limit(3)


    try {

        const {price}= req.body
        
         const sort_book= await BookModel.find({}.sort({"price":1}))
        
         res.status(200).send(sort_book)

    } catch (error) {

        console.log({"msg":error.message})
        res.send("error")
       
    }
});




module.exports={bookRouter}
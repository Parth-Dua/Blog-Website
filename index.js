import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var title = "" ; 
var content = "" ; 
var author = "" ; 
var blogs = [{title: "How to save money in college" , author: "author1" , content: "Budgeting can be hard, especially when you're on your own for the first time and have a limited income. Still, it's a necessary part of life that will never be more valuable than it is during the first lean years of college. You'll need to figure out what your priorities are and then set aside those funds first. Bank of America recommends five simple steps for creating and sticking to a budget: "},
{title: "How to save money in college" , author: "author1" , content: "Budgeting can be hard, especially when you're on your own for the first time and have a limited income. Still, it's a necessary part of life that will never be more valuable than it is during the first lean years of college. You'll need to figure out what your priorities are and then set aside those funds first. Bank of America recommends five simple steps for creating and sticking to a budget: "},
{title: "How to save money in college" , author: "author1" , content: "Budgeting can be hard, especially when you're on your own for the first time and have a limited income. Still, it's a necessary part of life that will never be more valuable than it is during the first lean years of college. You'll need to figure out what your priorities are and then set aside those funds first. Bank of America recommends five simple steps for creating and sticking to a budget: "}]; 

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public")); 

app.get("/", (req, res) => {
    res.render("index.ejs" , {blogs : blogs}); 
});

app.get("/write.ejs" , (req, res) => {
    res.render("write.ejs") ; 
}) ;

app.post("/submit", (req, res) => {
    author = req.body['author'] ; 
    title = req.body['title'] ;
    content = req.body['content'] ;
    blogs.push({title : title  , author: author , content: content}) ; 
    res.render("write.ejs" , {title: title , author: author}) ;
}) ;

app.listen(port , () =>{
    console.log("Server running on port" + port) ; 
});
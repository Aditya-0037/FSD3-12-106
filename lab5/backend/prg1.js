import express from "express"

const app = express();

app.get("/",(req,res)=>{
    //res.send("hello express");
    //res.send("<h1>hello express</h1>");
    res.send(`
        <h1>hello sever</h1>
        <h2> i am  responding from express framework </h2>
        <h3> the code is minimal and easyto return 
        `);
});

app.get("/about",(req,res)=> {

    res.send("<h2>about page</h2>");
})

app.get("/product",(req,res)=>{
    const product ={
        id:1,
        name: "mobile",
        price: 25000,
    };
    res.send(product);
});

app.listen(4444, () => console.log("prg1 is running at 4444"));
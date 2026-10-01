## Express


# steps
1. create project folder(lab5)
2. createtwo folder (frontend , backend) in root (lab5)
3. open terminal and reach to backend by
 ```
 cd ..
 cd lab5
 cd backed
 ```
 type `npm init -y`
 install nodemon `npm i nodemon -d`
 install express `npm i express`
 update backendd/package.json
 - change type `type:"module"`
 - change script
 ```
     "scripts": {
    "start":"node app.js",
    "dev":"nodemon prg1.js" }
```
8. add `lab5/backend/node_modules` to .gitignore
9. create `prg1` in backend
10. write the script below to start express server

```
import express from "express"

const app = express();

app.get("/",(req,res)=>{
    res.send("hello express");
});
app.listen(4444, ()=> console.log("prg1 is running at 4444"));
```
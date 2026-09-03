import {EventEmitter} from "node:events";

const start = () => {
    console.log("system starts");
};
const login = (name) =>{
    console.log(`${name} has logged in`);
};

const working = (name)=> {
    console.log(`${name} add item to cart`);
};
const checkout =(name ) => {
    console.log(`${name} logged out`);
};

const task = new EventEmitter();
task.on("greet",login);
task.on("greet",start);
task.on("greet",working);
task.on("greet",checkout);
task.once("exit",()=>{
    console.log("system exits");
});

task.emit("greet","aditya upadhyay");
task.off("greet",working);
task.emit("greet","aditya vikram singh");
task.emit("greet","aditya singh");

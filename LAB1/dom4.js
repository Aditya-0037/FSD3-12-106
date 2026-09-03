import { EventEmitter } from "events";

const form = new EventEmitter();

form.on("submit",(uname,password)=>{
    console.log("from submitted");

    console.log(`use name: ${uname}`);
    console.log(`user password: ${password}`);
});
form.emit("submit","abc@abc.com","475697764");
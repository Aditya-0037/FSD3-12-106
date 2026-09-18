// DM -. document object model
// EventEmitter demo: basic click event registration and emit
import { EventEmitter } from "events";

const button = new EventEmitter();

button.on("click", () => {
    console.log("Button clicked");
});

button.emit("click");

// Lab 2: fs/promises write and append demo
import {writeFile, appendFile} from "fs/promises";

//await writeFile("hello.txt","js is easy");

await appendFile("hello.text","\nFS is much easier than other");
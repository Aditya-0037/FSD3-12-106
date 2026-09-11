const f1 = () => {
  console.log("f1");
}   ;

const f2 = () => {
  console.log("f2");
};
const f3 = () => {
  console.log("f3");
};

function main(){
    console.log("main😂");
    setTimeout(f1,1000);
    setImmediate(f2);
    process.nextTick(f3);
    console.log("end ");

}
main();
// promise is a function not executed immediately but it must be executed after a while it has some status  during the execution at final it may resolve => successfully executed and reject => unsuccess
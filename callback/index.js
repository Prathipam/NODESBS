import { monitorEventLoopDelay } from "perf_hooks"
import { lookup } from "dns"

console.log("Starting Up")
setTimeout(()=>{
    console.log("Timer set to 2 sec")
},2000)

setTimeout(()=>{
    console.log("Timer set to 0 sec")
},0)

console.log("Finishing up")

// Output - Starting Up
// Finishing up
// Timer set to 0 sec
// Timer set to 2 sec
// Node JS application work by using Call stack, Node API and Event Queue(callback Queue)
// Whenever a function is encountered it will push into the call stack and it is removed when the execution is finished
// When the function run asynchronously it will registered with Node API andonce it is finished it will move to callback queue
// Callback queue will  wait until main is completed or call stack is empty and returns the callback function in the call stack


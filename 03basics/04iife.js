// Immediately Invoked Function Expression (IIFE)
// (function definition)(execution)

(function chai(){
    // name IIFE
    console.log("db connected");
})();

((name)=>{
    console.log(`db connected two ${name}`);
    
})("balva")
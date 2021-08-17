//a variadic function is a function that takes a variable amount of arguments
//in javascript(es6) we can use rest parameters to implement variadice functions
function variadic(...params){
    //this will return all of the arguments/parametes as an array!!!
    //I will return the sum of the digits
    let sum=0;
    for(i=0;i<params.length;i++){
        if(typeof(params[i]) == "number"){
            sum+=params[i]
        }else{break}
    }
    return sum
}

let ans=variadic(2,3,3,3,"sakib");
console.log(ans);
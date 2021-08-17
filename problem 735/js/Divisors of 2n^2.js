//the time while start of the program
let start=Date.now()
console.log(start);
//the number of divisors
let devil=5
let base=10
let bigN=Math.pow(base,devil);
let numberOfDivisors=(bigN*3)-3;
// let n=bigN;
console.log(`number of divisors initial ${numberOfDivisors}`);
//implementing F(N)
for(i=1;i<=bigN;i++){
let divisor=3
// console.log(i);
// let n=i;
let twoNsq=2*(i*i);
// console.log(twoNsq);
while(divisor <= (i-1)){
// let reminder=twoNsq%divisor;
//if the number is divisible by the divisor and it is surely less than n;So I have got one;
if(twoNsq%divisor == 0){
numberOfDivisors++
// console.log(divisor);
// console.log(numberOfDivisors);
}
divisor++
}  
}
//now how would I optimize it?
let end=Date.now()
console.log(end);
console.log(`time is ${end-start}`);
console.log(numberOfDivisors);
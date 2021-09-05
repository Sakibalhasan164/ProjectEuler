let rows=[[1]];
let initialProduct=1;
// let rowNumber=7//the row number of the triangle



let nrow=[]
for (let rowNumber = 2; rowNumber <=6; rowNumber++) {
    for (let k = 0; k <=rowNumber; k++) {
let nFact=factorial(rowNumber,0)
//setting the intialprduct back to default
initialProduct=1;
// console.log(nFact);
let kFact=factorial(k,0)
initialProduct=1;
// console.log(kFact);
// the final part
let nMinuskFact=factorial(rowNumber,k)
initialProduct=1
// console.log(nMinuskFact);
//finally
let product=kFact*nMinuskFact
let rowEntry=(nFact)/product
nrow.push(rowEntry)
}
rows.push(nrow)
// console.log(rows);
nrow=[]
// console.log(nrow);
}

console.log(rows);

function factorial(n,m){
   if(n==m | n==0){
    return 1;
    }else{
let factorailNumber=(n-m);
while(factorailNumber>0){
initialProduct*=factorailNumber;
factorailNumber-=1
} 
    }

return initialProduct;
// initialProduct=1;
}
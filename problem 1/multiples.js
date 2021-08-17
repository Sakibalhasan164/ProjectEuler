let checking_number=1
let multiples=[];
let sum=0

while(checking_number<10000000){
//check if it is multiple of 3 and 5
if(checking_number % 3 == 0 | checking_number %5 ==0){
    // console.log(checking_number);
    //add those numbers
    multiples.push(checking_number);
}
checking_number++
}

multiples.forEach(number => {
    sum+=number;
});
console.log(sum);
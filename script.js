console.log("1. Print all numbers between -10 and 19");
let num = -10;
while(num <= 19) {
    console.log(num);
    num++; 
}
console.log("2. Print all even numbers between 10 and 40");
let even = 10;
while(even <= 40) {
    console.log(even);
    even += 2;
}
console.log("3. Print all odd numbers between 300 and 333");
let odd = 300;
while(odd <= 333) {
    if(odd % 2 !== 0){
        console.log(odd);
    }
    odd += 1;
}
console.log("4. Print all numbers divisible by 5 AND 3 between 5 and 50");
let div = 5;
while(div <= 50) {
    if(div % 5 === 0 && div % 3 === 0){
        console.log(div);
    }
    div += 1;
}
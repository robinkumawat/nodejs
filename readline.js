// import { stdin } from 'process'
import readline from  'readline'


const inter = readline.createInterface(process.stdin,process.stdout)

// inter.question("what is your name?\n",(answer)=>{
//     inter.write(answer);
//     inter.close();
// })

// inter.question("enter  numbers  there squre\n",(numbers)=>{
//     const number = numbers.split(" ");
//     const map = number.map((num)=>num*num);
//     inter.write (map.join(" "));
//     inter.close;
// })

// inter.question("enter two name \n",(names)=>{
//     const name= names.split("");
//     console.log(name.length) 
//       inter.close  
    
// })

inter.question("sum numbers \n" ,(numbers)=>{
    const numArray= numbers.split(" ")
    const result=numArray.reduce((prev,curr)=>{
        return prev * curr;
    },0);
    console.log(numArray)
    inter.write(result)
    inter.close;
})
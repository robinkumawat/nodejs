import fs from 'fs'

// fs.readFile("data.txt",(err,data)=>{
//     if (err)console.log(err)
//     else{
// console.log(data.toString())
// }
// })
  const data="hii "
fs.writeFile("data.txt",data,(err)=>{
    if(err)console.log(err)
})




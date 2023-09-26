import express from "express"

let students = [
    { id: 1, name: 'robin kumawat', age: 18, phone: 1234556677 },
    { id: 2, name: 'pankaj kumawat', age: 20, phone: 1234556877 }

];

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.json(students)
})
app.post("/new",(req,res)=>{ 
    const newstudent =req.body;
    students.push(newstudent);
    res.status(3).json(students);
});
app.put("/change/:id(\\d+)",(req,res)=>{ 
    const id = parseInt(req.params.id);
    const upDateStudent = req.body;
    students.forEach((student,index)=>{
        if(student.id==id){
            students[index]=upDateStudent
        }
    });
    res.json(upDateStudent);
});
app.delete("/change",(req,res)=>{
    const id = parseInt(req.params.id);
    students = students.filter((student)=>student.id!=id);
    res.json({massage:`student with id ${id}deleted`});
    
 });
  

app.listen(4000,()=>console.log("server started at port 4000"))
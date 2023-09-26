import http from "http";
import { parse } from "path";

let students = [
    { id: 1, name: 'robin kumawat', age: 18, phone: 1234556677 },
    { id: 2, name: 'pankaj kumawat', age: 20, phone: 1234556877 }

];

const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        if (req.url.match("/students")) {

            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(students))
            // {console.log("hello world")}
        }
        else {
            res.writeHead(404, { 'Content-Type': 'text/plain ' })
            res.end("not a velid ")
        }
    }
    //ADDING NEW DATA TO ARRAY~
    if (req.method === "POST") {
        if (req.url.match("/new")) {
            let newStudent = ''
            req.on("data", (dt) => {
                newStudent += dt.toString()
            })
            req.on("end", () => {
                if (students.push(JSON.parse(newStudent))) {
                    res.writeHead(200, { 'Content-Type': 'application/json' })
                    res.end(JSON.stringify(students))
                }
                else {
                    res.writeHead(404, "Path not found")
                }
            })
        }
    }
    if (req.method === "PUT") {
        if (req.url.match("/put")) {
            let stuUpdate = req.url.split("/put")[2];
            let stuUpdateDetail = "";
            req.on("data", (data) => {
                stuUpdateDetail += data.toString();
            })
            req.on("end", () => {
                students[stuUpdate - 1] = JSON.parse(stuUpdateDetail)
                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify(students));
            })
        }

    }

   if(req.method==="PATCH"){
    if(req.url.match("/patch")){
        let stuId=req.url.split("/patch")[2];
        let stuPatchDetail ="";
        req.on("data",(data)=>{
            stuPatchDetail+=data.toString();
        })
        req.on("end",()=>{
            const studentToUpdate=students.find(student =>student.id ===parseInt(stuId))
            if (studentToUpdate){
                const patchDate = JSON.parse(stuPatchDetail);
                for(const key in patchDate){
                    if(Object.hasOwnProperty.call(patchDate,key)){
                        studentToUpdate[key]=patchDate[key];
                    }
                }
                res.writeHead(200,{'Content-Type':'application/json'});
                res.end(JSON.stringify(studentToUpdate));
            }else{
                res.writeHead(404,{'Content-Type':'application/json'});
                res.end("student not found")
            }
        })
    }
   }
})
server.listen(6000, () => { console.log("server has started at port 6000") })




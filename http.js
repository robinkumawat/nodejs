import http from "http";

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
            req.on("end",() => {
               if( students.push(JSON.parse(newStudent)))
               {
                   res.writeHead(200,{'Content-Type':'application/json'})
                   res.end(JSON.stringify(students))
                }
                else {
                  res.writeHead(404,"Path not found")
                }
            })
        }
    }
    if(req.method==="PUT"){
        let stuUpdate =Number(req.url.split("/put")[2]);
        let stuUpdateDetail = "";
        req.on("data",(data)=>{
            stuUpdateDetail+=data.toString();
        })
        req.on("end",()=>{
            students.forEach((stud,index)=>{
                if(stud.id==stuUpdate){
                    students[index]=JSON.parse(stuUpdateDetail);
                }
            })
            res.writeHead(200,{'Content-Type':'application/json'})
            res.end(JSON.stringify(students));
        })
    }
    

})
server.listen(6000, () => { console.log("server has started at port 6000") })


 

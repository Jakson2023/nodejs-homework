// import fs from "fs";
// fs.readFile ("./db/contacts.json", (error, data)=>{
// console.log(error),
// console.log (data)

// })
// import fs from "fs/promises"
// fs.readFile ("./db/contacts.json")
// .then((data) => console.log(data))
// .catch((err) => console.log(err.message));

import fs from "fs/promises";

const filepath = "./db/contacts.json";
const func = async()=> {

    const infoFile = await fs.readFile(filepath,"utf-8");
    console.log(infoFile);
//     const buffer = await fs.readFile (filepath);
//     const infoFile = buffer.toString()
// console.log(infoFile);
}
func();
const fs=require('fs');
const http=require('http');

//for check always by console
//console.log(fs);

// fs.writeFile("h.txt","hello mrigaank here",function(err){
//     if(err){
//         console.log("error")
//     }
//     else{
//         console.log("done")
//     }
// });
// fs.appendFile("h.txt","me accha hu",function(err){
//     if(err){
//         console.log("error")
//     }
//     else{
//         console.log("done")
//     }
// });


// fs.rename("h.txt","hello.txt",function(err){
//     if(err){
//         console.log("hi")
//     }
//     else{
//         console.log("done")
//     }
// // })

// fs.copyFile("hello.txt","h.txt",function(err){
//     if(err){
//         console.log("err")
//     }
//     else{
//         console.log("done dn")
//     }
// })


//to delete 
// fs.unlink("hello.txt",function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("done")
//     }
// })
 

//to delete folder and folder to delete
// fs.rm("./copy",{recursive:true},function(err){
//     if(err){
//         console.log("err")
//     }
//     else{
//         console.log("done")
//     }
// })

// fs.readFile("h.txt",'utf8',function(err,data){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })


// fs.mkdir("./copy",function(err){
//     if(err){

    
//     console.log("err")
//     }
//     else{
//         console.log("done")
//     }
// })


//server
const server=http.createServer(function(req,res){
    res.end('hello backend');
})

server.listen(3000);
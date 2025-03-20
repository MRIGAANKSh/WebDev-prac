function promise(){
    
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("hi ")
        }, 2000);
    })
   
}

async function main(){
    let a=await promise();
    console.log(a);
}
main();
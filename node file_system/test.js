let a =20;
let b=0;

// async function process() {
//     let promise=new Promise((resolve, rej)=>{
//         setTimeout(() => {
//             resolve(30)
//         }, 2500);
//     })
//     const data=await promise;//wait for promise, once promise reloved, store result/data in data var
//     b=data;
//     console.log(a+b)    
// }
// process();
let process = new Promise((resolve, rej) => {
    setTimeout(() => {
        resolve(30)
    }, 2500);
})
process.then((data)=>{
    b=data;
    console.log(a+b)
})
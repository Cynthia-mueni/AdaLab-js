let internship=true;
let ourPromise = new Promise((resolve,reject)=>{
    if (internship){
        resolve('I made it')
    }
 else {
    reject('I will try harder')
}
})

ourPromise.then(()=>{
    console.log('I will continue working hard')
})
.catch(()=>{
    console.log('I will continue applying for jobs')
})
.finally(()=>{
    console.log('I will be a software Enginner')
})


// console.log({ourPromise}); 



async function myAkirachixDream(){
    try{
     console.log('This is my dream')
    await ourPromise;
}
catch{
    console.log('our dream is not yet successful')
 }
}
myAkirachixDream();
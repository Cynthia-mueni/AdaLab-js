function greet(userName,callback){
    console.log(`Hello there ${userName}`)


    callback()

}


function intro(){
    console.log('This is me');
}

greet ('Hello',intro)


setTimeout(intro,2000);

setInterval(function(){
    console.log('The is an interval');
},3000)
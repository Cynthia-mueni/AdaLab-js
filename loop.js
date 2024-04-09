const mutiply =(num)=>{
    let newArray =[]

    for(let i = 0; i<num.length; i++){
        const mutiplyByTwo = num [i]*2;
        newArray.push(mutiplyByTwo);
    }
    return newArray;
}
console.log(mutiply([2,3,4,5,6,7,8]));


const totalSum = (numbers) =>{
    let sum = 0;
    for(let num of numbers){
        sum += num
    }
    return sum;
}
console.log(totalSum([2,3,4,5,6,7,8]))


const students=(studentsNames)=>{
    while(studentsNames.length > 2){
        console.log("Teach students")
        studentsNames.pop()
        if(studentsNames.length===2){
            console.log('you are left with two students')
            break;
        }
    }
    
    }
    
    students(["Ema","Eve","Ann","Judith"])


    const kickBall = (leg) =>{
        do{
            console.log('kick tha ball');
        }while(leg)
    };
    kickBall(false)
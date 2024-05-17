// function insertElement(){
//     let index=3
//     let element=8

//     array.Splice(index,0,element)
//     console.log(array)
// }
// insertElement()

const Students={
    Name:'Naomi',
    age:20,
    grade:[80,50,90]
}
function avarageGrade(Students){
    let sum=0;
    for(let i=0;i<Students.grade.length;i++){
        sum+=Students.grade[i];
    }
    let average=sum/Students.grade.length
    console.log({average})

}
avarageGrade(Students);




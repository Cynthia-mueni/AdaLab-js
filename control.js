const personAge = (age)=> {
    if (age>=18){
        return "you are an adult"
    }else if (age >=13 && age <18){
        return "you are a teenager"
    }else{
        return "you are a child"
    }
}
console.log(personAge(10))


const greeting = (dayOfTheWeek) =>{
    switch(dayOfTheWeek){
        case 'Monday':
          console.log("Hello Monday");
        break;
        case 'tuesday':
            console.log("Hello Tuesday")
            break;
        case 'Wenesday':
            console.log("Hello Wenesday ")
            break;
        case 'Thursady':
            console.log("Hello Thursday")    
            break;
            case 'Friday':
                console.log("Hello Friday")    
                break;
                case 'Saturday':
            console.log("Hello Saturday")    
            break;
            case 'Sunday':
            console.log("Hello Sunday")    
            break;
            default:
                console.log("Not day of the week")
        

    }
};

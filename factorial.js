function factorial(number){
    let result=1;
    if(number==1 || number==0){
        console.log(`The factorial of ${number} is ${result}`);
    }else{
        for(let i=1; i<=number; i++){
            result=result*i;
        }
        console.log(`The factorial of ${number} is ${result}`);
    }
}

factorial(10);
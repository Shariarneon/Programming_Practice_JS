function factorialRecurtion(number){
    if(number==0 || number==1){
        return 1;
    }else{
        return number * factorialRecurtion(number - 1);
    }
}

console.log(factorialRecurtion(5));
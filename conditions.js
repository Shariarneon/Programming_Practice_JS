function condition() {
    const data = 10;
    if(data == 0){
        console.log(`${data} is an even number`);
    }else if(data % 2 == 1 && data > 0){
        console.log(`${data} is an odd number`)
    }else if (data % 2 == 0 && data > 0){
        console.log(`${data} is an odd number`)
    }else{
        console.log("Please enter a valid number")
    }
}

condition();
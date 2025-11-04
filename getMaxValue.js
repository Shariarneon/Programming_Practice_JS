const data=[20, 6, 88, 9, 0, 3, 91]

function getMax(arrayData) {
    let maxData = arrayData[0];
    for(let i = 1; i < arrayData.length; i++) {
        if(arrayData[i] > maxData){
            maxData = arrayData[i];
        }
    }
    console.log(`max data is: ${maxData}`);
}

getMax(data);
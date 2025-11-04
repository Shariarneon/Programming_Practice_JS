function fibonacci(min, max) {
    let series = [0, 1];
    let currentData;
    let expectedSeries = [];
    for(let i = 2; i < max; i++) {
        currentData = series[i - 1] + series[i-2];
        series.push(currentData);
        if (currentData >= min && currentData <= max) {
            expectedSeries.push(currentData);
        }
    }
    console.log(`Expected fibonacci seris is: ${expectedSeries}`);
}

fibonacci(25, 80);
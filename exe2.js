const input = [12,46,32,64];

function mean(){
    var sum = 0,i, mean;
    for(i=0;i<input.length;i++){
        sum += input[i];
    }
    mean = sum/input.length;
    console.log("mean is ", mean);
}
mean();

function median(){
    var len = input.length;
    var newInput = input.sort();
    var index = (len + 1)/2;
    var median;
    if(index !== Math.round(index)){
        median = (newInput[Math.floor(index-1)]+newInput[Math.ceil(index-1)])/2
    }else{
        median = newInput[index-1];
    }
    console.log("Median is ", median)
}

median();
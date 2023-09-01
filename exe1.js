const input = [1.-4,12,0,-3,29,-150];
// const input = [1.-4,-12,-3,-29,-150];
// const input = [];
var sum = 0, count = 0;
if(input.length === 0){
    return 0;
}else {
    input.forEach(num => {
        if(num >= 0){
            sum += num;
        }else {
            count++;
        }
    })
    if(count === input.length){
       return 0;
    }else {

        console.log("Sum is ", sum)
    }
}

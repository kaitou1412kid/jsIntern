const input = [
    {
        name : 'John',
        age : 13
    },
    {
        name : 'Mark',
        age : 56
    },
    {
        name : 'Rachel',
        age : 45
    },
    {
        name : 'Nate',
        age : 67
    },
    {
        name : 'Jeniffer',
        age : 65
    }
]

function operation(){
    let min=0, max=0;
    for(var i=0; i< input.length;i++){
        if(min == 0 && max ==0){
            min = input[i].age;
            max = input[i].age;
        }
        else {
            if(min > input[i].age){
                min = input[i].age;
            }
            else if (max < input[i].age){
                max = input[i].age;
            }
        }
    }
    let diff = max - min;
    console.log(min, max, diff);
}
operation();
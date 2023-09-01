const input = 'George Raymond Richard Martin';
const names = input.split(' ');

var initial = '';

for(var i=0;i<names.length;i++){
    initial = initial + names[i].charAt(0).toUpperCase();
}

console.log(initial)
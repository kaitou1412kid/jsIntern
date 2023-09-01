function checkNull(value){
    if(value === null){
        console.log("Null");
        return true;
    }else {
        console.log("not null");
        return false;
    }
}

checkNull(null);
checkNull("hello")
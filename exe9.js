function checkUndefined(value){
    if(value === undefined){
        console.log("undefined");
        return true;
    }else {
        console.log("Not undefined")
        return false;
    }
}
checkUndefined("hello");
var hello;
checkUndefined(hello);
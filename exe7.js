function checkJson(json){
    try{
        JSON.parse(json);
        console.log("valid Json");
    }catch(e){
        console.log("Invalid Json");
    }
}
checkJson("{name : 'kritagya', age : 20}")
checkJson('{"name": "John", "age": 30}')
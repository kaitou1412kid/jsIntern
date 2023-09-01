const companies = [ { name: "Company One", category: "Finance", start: 1981, end: 2004 }, { name: "Company Two", category: "Retail", start: 1992, end: 2008 }, { name: "Company Three", category: "Auto", start: 1999, end: 2007 }, { name: "Company Four", category: "Retail", start: 1989, end: 2010 }, { name: "Company Five", category: "Technology", start: 2009, end: 2014 }, { name: "Company Six", category: "Finance", start: 1987, end: 2010 }, { name: "Company Seven", category: "Auto", start: 1986, end: 1996 }, { name: "Company Eight", category: "Technology", start: 2011, end: 2016 }, { name: "Company Nine", category: "Retail", start: 1981, end: 1989 } ];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
const person = { name: "Costas", address: { street: "Lalaland 12" } };

//exe 1
function exe1(){

    companies.forEach(company => {
        console.log(company.name);
    })
}
// exe1()


//exe 2
function exe2(){

    console.log("Company after 1987");
    companies.forEach(company => {
        if(company.start > 1987){
            console.log(company.name);
        }
    })
}
// exe2()
    

//exe 3
function exe3(){

    companies.forEach(company => {
        if(company.category === "Retail"){
            company.start += 1;
            var paragraph = document.createElement("p");
            paragraph.textContent = company.name +" " + company.category + " " + company.start + " " + company.end;
            var div = document.getElementById("comp");
            div.appendChild(paragraph);
        }
    })
}
    
//exe 4
function exe4(){
    companies.sort((a,b)=> a.end - b.end);
    console.log(companies);
}
// exe4()

//exe 5
function exe5(){
    ages.sort((a,b)=> b-a);
    console.log(ages);
}
// exe5();

//exe 6
function exe6(){
    let sum = ages.reduce((total, num)=> total + num);
    console.log(sum)
}
// exe6()

//exe 7
function exe7(){
    const {name , category} = companies[0];

    const newCompany0 = {
        name,
        category,
        print : ()=>{
            console.log(name);
        }
    }
    newCompany0.print();
}
// exe7();

//exe 8
function exe8(){
    let sum =0;
    for(let i=0;i<arguments.length;i++){
        sum += arguments[i];
    }
    console.log(sum);
}
// exe8(1,2)
// exe8(10,20,30)

// exe 9
function exe9(){
    let arr = [];
    for(let i=0;i<arguments.length;i++){
        arr.push(arguments[i]);
    }
    console.log(arr);
}
// exe9(10,20,"kritagya");
// exe9(10,20,"kritagya", [1,2,3]);

// exe 10
function exe10(){
    let street = person.address.street;
    console.log(street);
}
// exe10();

//exe 11
function exe11(){
    let count = 0;
    return function(){
        return count++;
    }
}
// let increment = exe11();
// console.log(increment())
// console.log(increment())
// console.log(increment())
// console.log(increment())

// exe 12
function exe12(){
    let urlObject = new URL("https://www.xya.com?name=kritagya&age=30");
    let queryParam = {};
    for(const [key, value] of urlObject.searchParams){
        queryParam[key] = value;
    }
    console.log(queryParam);
}
// exe12();
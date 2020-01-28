
let isLeapYear=(year:number):string=>
{

    let s= (year % 100 === 0) ? (year % 400 === 0)
    : (year % 4 === 0);
    console.log(s);
    if(s==true)
    return "LeapYear";
    else
        return "Not LeapYear";
}
console.log(isLeapYear(2020));
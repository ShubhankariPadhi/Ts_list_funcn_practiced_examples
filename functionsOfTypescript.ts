/*function with parameter and return type*/

function buildName(firstName: string, lastName: string):string {
    return firstName + " " + lastName;
}

//let result1 = buildName("Bob");                  // error, too few parameters
//let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3:string = buildName("Bob", "Adams");
console.log(result3);

let buildname=(fn:string,ln:string):string=>{
    return fn+" "+ln;
}
console.log(buildname("su",""));



/*function with parameter and no return type*/
function wtp_woutr(name1:string,num:number):void{
    console.log(name1+" " +num);
}
wtp_woutr("subhi",22);


let Arw_wtp_woutr=(nm:string,num:number):void=>
{
    console.log();
}
Arw_wtp_woutr("",1);


/*function without parameter and no return type*/
function woutp_woutr():void{
    console.log("sum is"+1+2);
}
woutp_woutr();


let Arw_woutp_woutr = ():void => console.log("Hello TypeScript");

let retn=Arw_woutp_woutr();
console.log(retn);//undefined


/*function without parameter and no return type*/
function woutp_wthr(){

    return "withoutparameter "+( 6)+"with return type";
}
let result=woutp_wthr();
console.log(result);


let Print = () =>{ console.log("Hello TypeScript"); return "anything"}

console.log("return value is "+Print()); //Output: Hello TypeScript
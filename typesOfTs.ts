/*boolean*/
let isDone:boolean=true;// or false

/*number*/
//in js number is in  floating point but in ts every type floating pt along with binary and octal also get number type
let decimal:number=10;
let octal:number=0o123;
let binary:number=0b1111;
let hex:number=0x1234;

/*String */
let names:string="subhi";
let color:string='blue';
let time:number=2;
let clraft1yr:string=`blue will turn into green after ${time+3} minutes`;



console.log("boolean value= "+isDone+" decimal= "+decimal+" octal "+ octal+" binary= "+binary+" hex= "+hex);
console.log("string "+ clraft1yr);

/*Array*/

let list:number[]=[1,2,3];
console.log(list);

//generic array type
 let list2:Array<string>=["1","3",'f'];
 console.log(list2);

 /*Tupple*/
 //an array with a fixed number of elements whose types are known, but need not be the same
let x:[string,boolean];
x=["hii",true];

console.log(x);

//x=[12,"hii"];//error
//x[3]="";
console.log(x[5]);//undefined
//console.log(x[5].toString());//can not read property of undefined


/*Enum*/
//we can set values of enum arrays,by default it starts from 0,

enum Color {Red = 1, Green, Blue=4}
let colorName: string = Color[2];
console.log(colorName+" "+Color[4]); // Displays 'Green' as its value is 2 above


/*Any*/
let notSure: any = 4;
notSure = "maybe a string instead";
console.log(typeof notSure);//string

notSure = false; // okay, definitely a boolean
console.log(typeof notSure);//boolean


/*void*/
function warnUser(): void {
    console.log("This is my warning message");

}

let res= warnUser();
console.log(res);


/*null and undefined*/

let u: undefined = undefined;
let nl: null = null;

console.log("undefined= "+u+"  null = "+nl);



/*never*/
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}


/*advanced types*/

/*union*/
let code: (string | number);
code = 123;   // OK
code = "ABC"; // OK
//code = false; // Compiler Error

let empId: string | number;
empId = 111; // OK
empId = "E111"; // OK
//empId = true; // Compiler Error
/*push operation in array*/

var numbers = new Array(1, 4, 9);
var length = numbers.push(10);
console.log("new numbers is : " + numbers );
length = numbers.push(20);
console.log("new numbers is : " + numbers );


let listarr:number[]=[1,2,3];

listarr.pop();//3
console.log(listarr);//1,2

listarr.push(19);
console.log(listarr);//1,2,19

/*empty array declaration and its push pop operation*/

var arr: number[] = [];//var arr = new Array<number>();var arr = <number[]>[];var arr = [] as number[];

arr.push(10);
arr.push(20);
console.log(arr+" "+arr.length);

arr.pop();
console.log(arr+" "+arr.length);

/*iterators and generators*/
/*Array*/

let Arrlist:number[]=[1,2,3];

/*for of*/
for(let nums of Arrlist){
    console.log(nums);//1,2,3
}


/*for in*/
for (let nums in Arrlist){
    console.log(nums);//0,1,2
}

/*dif is for... of returns a list of values on object where as for in returns the  list of keys  */

let someArray = [1, "string", false];
someArray["new"]="addnew  ";

for(let s of someArray){
    console.log(s);//1,string,false
}
for(let s in someArray){
    console.log(s);//0,1,2,3
}
//for in interested in inspect new object also where as for... of only interested in the iterating object

/*for each*/

let n=["1","d",4];
n.forEach(function (a) {
    console.log(a);

})
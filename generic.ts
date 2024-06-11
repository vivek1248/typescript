 // generic in typescript 
    function add_number<t>(val1:t):t{
        return val1;
    } 
    console.log(add_number(1.1));
  
 // generic arrow function in ts 
 
 function seaech<t>(argument:t[]):t {
    return argument[2];
 }

 const value =<t>(argument:t[]):t=>argument[2];

 interface user{
    lname:string
    fname:string
    data:string
 }
let vivek:user ={lname:"baraiya",fname:"vivek",data:"1/2/2024"}
 function print<t,u extends user>(argument1:t,argument2:u):object {
    return {
       argument1,argument2
    }
 }

 console.log(print(1,vivek));
 // generic classes

 class sellable<t>{
    public cart:t[]=[]
     

 }
 export{}
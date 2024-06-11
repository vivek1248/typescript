// more then one data type is possible of any variable using union

let name : string | number ="vivek";

type user ={
    name:string
    islogin:boolean;
    display():string
}
type admin ={
    adminname:string
    islogin:boolean
}

let vivek :user | admin ={name:"vivek baraiya", islogin:true, display(){return this.name}}

//vivek={adminname:"vivek123" , islogin:false}
console.log(vivek.display());

function add(value1 :string | number,value2 :string | number )
{
    if((typeof value1 ==="string") && (typeof value2=== "string"))
        {
            return value1.toUpperCase();
        }
        else if ((typeof value1 ==="number") && (typeof value2=== "number")){
            return value1+value2;
        }
}
   
 let arr :number[]=[]
 let arr2 :number[]|string[]=[1,2,3]
 arr2=["1","2","3",]
 let arr3 :(number|string|boolean)[]=[1,3,"2",true]

 // how to give fixd value in ts

 let airsets :"front" | "middle" |"back";

    airsets="front";    
   // airsets="crow";  ----> this is not valid   
      

export{}
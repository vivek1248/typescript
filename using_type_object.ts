//simple javascript object

let obj={
    name:"vivek baraiya",
    id:"22cp014"
}

// object using function 
function greet(user :{name:string, id :number}){
    return  "hellow" + user.name;
}

greet({name:"vivek", id:1234});

// using type alias

type user1={
    fname: string
    lname: string
    mobilenum:number 
}

function createuser(user:user1){
    return `user name is ${user.fname} ${user.lname}`
}

console.log(createuser({fname:"vivek",lname:"baraiya", mobilenum:123456}));

// redonly and ?
type user2={
    readonly _id :number
    fname: string
    lname: string
    cardit_card ?:number
}

let user :user2={
     _id : 123,
    fname: "vivek",
    lname: "baraiya",
}
//user2._id=234;
//console.log(user2._id);

// more then one type and combine it 
   type p1={
    name:string
    data:string
   }
   type p2={
    email:string
    id:string
   }
   type p3= p1 & p2 ;
export{}
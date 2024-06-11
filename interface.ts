 interface user {
    name:string
    age : number 
    id : string
    amount:number
    discount:number
    display():void 
    calculate_price(amount:number,discount:number):number
 }
 
//reopening of interface 
 interface user{
    githubtoken : string
}
  // inheritance property 
  interface admin extends user {
    role: "admin"|"learner" |"student"
  }
    
 let user4:admin ={name:"vivek baraiya",
            age:22,
            role:"learner",
            id:"22cp014",
            githubtoken:"git123",
            amount:500,
            discount:100,
            display() {
                console.log(`welcome ${this.name}`)
            },
            calculate_price(amount=this.amount,discount=this.discount){
                return amount-discount;
            }
        }
        user4.display()
        console.log(user4.calculate_price(user4.amount,user4.discount));


export{}
        
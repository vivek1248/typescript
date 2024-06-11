class user {
    readonly city:string ="bhvnager"
    constructor(public email:string, public password:string){

    }
}
const vivek:user= new user("vivek","1234");
console.log(vivek.email,vivek.password);

export{}
class user {
    readonly city:string ="bhvnager";
  public _email:string;
   private _password:string


    constructor( email:string, password:string){
          this._email=email;
          this._password=password;
    }

    get email():string {
       return this._email;
    }

    set email(pera_email:string){
        if(pera_email.indexOf('@') !== -1)
            {
                  this._email=pera_email;
            }
            else{
                console.log("email is not valid");
            }
    }

    set password(new_pass:string){
        if(new_pass.length>5)
            {
                this._password=new_pass;
            }
            else{
                console.log("password is not valid");
            }
    }
}

let user1:user ;
user1 =new user("vivek@gmail.com","123456789");
user1.email="vivek123";
user1.password="123";


export{}
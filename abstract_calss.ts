 // abstract class dose not  make any object with that 
abstract class user {
      public name:string
      protected mobile_no:number
      public age:number
      protected user_count:number=0;
    constructor(name:string, mobile_no:number,age:number){
        this.name=name;
        this.mobile_no=mobile_no;
        this.age=age;
    }
    // abstract method
    abstract display_mobile_no():void
}

 class teacher extends user {
    public role:"teacher" |"student"

    constructor(name:string, mobile_no:number,age:number,role:"teacher"|"student"){
        super(name,mobile_no,age)
        this.role=role
        this.user_count++;
    }
    display_mobile_no(): void {
        console.log(this.mobile_no);
    }
 }

 let teacher1:teacher;
 teacher1= new teacher("vivek baraiya",22222222,23,"teacher");
 teacher1.display_mobile_no();

 export{}

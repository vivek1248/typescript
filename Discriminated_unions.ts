interface circle {
    kind:"circle"
    redious:number
}
interface square {
    kind:"square"
    side:number
}
type shape =circle | square

function calculate(shape:shape)
{
    if(shape.kind==="circle")
        {
            return Math.PI*shape.redious**2;
        }
    else{
        return shape.side**2;
    }    
}

//Exhaustiveness checking  

function calculate2(shape:shape){
     switch(shape.kind){
     case "circle":
        return Math.PI*shape.redious**2;
     case "square":
     return shape.side**2;
     default:
        const error:never=shape 
            return error  
     }
}
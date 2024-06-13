// generaly we check type in this way 
// suppoes we have array of charecter then  what to do
function extracttype(value:string|number|boolean|string[])
{
    if(typeof value==="object")
        {
            return value;
        }
    else if (typeof value==="boolean")
    {
        return value;
    }
    else{
        return value;
    }    
}
// we also take care about thruthi value 
// this are all return truthi value 
// NaN
// "" (the empty string)
// null
// undefined

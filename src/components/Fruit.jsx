export default function Fruit({name,price,emogi}){
    return (
        <>
            
    
        {price>20? <li>{emogi} {name} {price}</li>:""}
       
    
    
    </>
    )
}
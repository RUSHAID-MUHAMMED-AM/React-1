export default function Fruits(){
    const fruits=[
       { name:"Apple", price:10, emogi:"🍎"},
       {name:"Orange",price:20,emogi:"🍊"},
       {name:"Banana",price:30,emogi:"🍌"},
       {name:"pineApple",price:40,emogi:"🍍"},
    ]
    return(
        <div>
         <ul>
            {fruits.map((fruit) => <li key={fruit.name}>{fruit.emogi} {fruit.name} $ {fruit.price}</li>)}
         </ul>
        </div>
    )
}
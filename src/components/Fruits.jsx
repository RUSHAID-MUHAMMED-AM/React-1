import Fruit from './Fruit.jsx';

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
            {fruits.map((fruit)=>(
            <Fruit key={fruit.name} name={fruit.name} price={fruit.price} emogi={fruit.emogi}/>
            ))}
            </ul>
        
        </div>
    )
}
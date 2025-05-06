import CondicompoT from "./CondicompoT";
import CondicompoF from "./CondicompoF";
export default function Conditional(){
    const display=false;
    let message;
    message=display?<CondicompoT/>:<CondicompoF/>;
    
return (
  <div>
    {message}
  </div>
)
}
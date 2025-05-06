export default function Event(){
    function eventHandling(){
        console.log("Button clicked");
    }
    return(
        <div>
            <button onClick={eventHandling}>
                Click here
            </button>
        </div>
    )
}
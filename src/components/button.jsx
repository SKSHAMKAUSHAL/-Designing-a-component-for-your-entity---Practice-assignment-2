// write button card here
import { useState } from "react";

function Button(){
    const [colour, setColor] = useState('blue')

    return(
        <div>
            <button style={{
                backgroundColor: colour
            }} onClick={()=>{
                setColor((e) => e === 'crimson' ? 'blue' : 'crimson')
            }}>Click Here !</button>
        </div>
    );
}


export default Button
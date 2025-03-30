
import {useState} from 'react';

function MyHook2(){
    const[color, setColor] = useState("red"); 

    const changeColorBlue = (e) => {
        setColor("blue");
        e.target.style.backgroundColor = "hsl(334, 59.80%, 52.20%)"; 
    }
    const changeColorGreen = (e) => {
        setColor("green")
        e.target.style.backgroundColor = "yellowgreen"
    }
    
    return(
        <>
            <div className='colorContainer'>
                <p>My favorite color is {color}.</p>
                <button type="button" onClick={(e) => changeColorBlue(e)}> Change Color to Blue</button>
                <button type="button" onClick= {(e) => changeColorGreen(e)}> Change Color to Green</button>
            </div>
        </>
    );
}
export default MyHook2
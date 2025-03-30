// useEffect : React Hook that tells React to DO SOME CODE when :
//             This component re-renders                
//             This component mounts   
//             The state of a variable/value changes  

// Syntax : useEffect(function, [dependencies])               
// 
// 1. useEffect(()=> {})              // Runs after every re-renders           
// 2. useEffect(()=> {}, [])         // Runs only on mount        
// 3. useEffect(()=> {}, [value])       // Runs on mount + when value changes

// Uses 
// #1 Event Listeners
// #2 DOM Manipulation
// #3 Subscriptions (real-time Updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts


import {useState, useEffect} from 'react';


function MyComponent2(){
    const [count, setCount] = useState(0);
    return(
        <>
            <div>
                <p>Count : {count} </p>
                <button type="button">Add</button>
            </div>
        </>); 
}
export default MyComponent2



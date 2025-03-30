// passing arguments in a onclick attribute is possible if we enclose it in another arrow function, utilising event object properties to change the display of component(image button) to none or using event.target.innerHTML or innerText or textContent to change the text of button.  

function Button2 ( ) {

    // const userName = "Ganesh Singh";
    const btnHandleClick = (e) => {
         e.target.innerText = "WOW";
    } 
    
    return (
    <>
        <button type="button" onClick={(e) => btnHandleClick(e)}>Click me 😎</button>
    </>);
}
export default Button2
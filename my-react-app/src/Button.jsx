// Inline CSS  

// Make a Javascript variable like styles and assign all the CSS properties in Key-value pairs separated by commas just like Javacscript object
// Remember all the values will be string and there will be no hyphen in keys but we will use camelcase to define css properties 
// After this we will set the style property of component to {styles}, {} curly braces are used in jsx if we want to use a javascript in HTML like code.

function Button () {
    const styles = {
        color:"white",
        fontSize : "2rem",
        backgroundColor: "hsl(240, 36.40%, 74.70%)",
        padding: "10px 15px",
        border :"none", 
        borderRadius : "3px",
        cursor:"pointer",
    }

    return (
        <div className="BtnContainer">
            <button className="Btn" style={styles}> Log In </button>
        </div>
    );
}

export default Button
// Passing a JavaScript object inside a useState hook state variable. 

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function MyComponent() {
    const [car, setCar] = useState({
        brand: "Bugatti",
        model: "Bugatti Chiron Super Sports",
        primaryColor: "Blue",
        secondaryColor: "Black",
        topSpeedKmph: 500,
        year: 2020,
    });

    const handleColorChange = (event) => {
        setCar(c => ({...c, primaryColor: event.target.value}));
    }
    const handleModelChange = (event) => {
        setCar(c => ({...c, brand: event.target.value}));
    }
    const handleYearChange = (event) => {
        setCar(c => ({...c, year : event.target.value}));
    } 

    return (
        <div>
            <h3> I would like to have a {car.brand}  of  {car.primaryColor}  
            &nbsp; and &nbsp; {car.secondaryColor} color, of year  {car.year} </h3>
            <label >Change Model of Car : </label>
            <input id='model' type="text" onChange={handleModelChange} /> <br /> <br />
            <label> Change Color: </label>
            <input type="text" id="color"onChange={handleColorChange} /> <br /> <br />
            <label> Change Year: </label>
            <input type="number" id="year" onChange={handleYearChange} /> <br /> <br />
            <button type="button"> Proceed to Purchase your Bugatti</button>
        </div>
    );
}

export default MyComponent
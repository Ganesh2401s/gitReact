
function List () {

    // const cars = ["Bugatti Chiron", "Lamborghini Urus", "Bugatti Divo", "Laferarri Aperta", "Mercedes Maybach"];
     
    const superCars = [
                    {id: 1, carName : "Bugatti Chiron", topSpeedKmph:500}, 
                    {id: 2, carName : "Lamborghini Urus", topSpeedKmph : 200}, 
                    {id: 3, carName : "Bugatti Divo", topSpeedKmph : 520},  {id: 4, carName : "Laferarri Aperta", topSpeedKmph : 380}, 
                    {id: 5, carName : "Mercedes Maybach", topSpeedKmph: 350}];
    
    //sorting carName lexicographically in ascending order:             
    // superCars.sort((a, b) => a.carName.localeCompare(b.carName));
    
    // saorting carName in lexicographically decreasing order:
    // superCars.sort((a,b) => b.carName.localeCompare(a.carName));

    // sorting superCars in ascending order of topSpeed:
    // superCars.sort((a,b) => a.topSpeedKmph - b.topSpeedKmph);

    // sorting superCars in descending order of topspeedkmph:
    // superCars.sort((a,b) => b.topSpeedKmph - a.topSpeedKmph );

    // filtering superCars which have top speed more than 300kmph:
    const highSpeedSuperCars = superCars.filter(superCar => superCar.topSpeedKmph > 300);

    const carItems = highSpeedSuperCars.map( superCar => 
        <li key = {superCar.id}>
        {superCar.carName}: &nbsp; 
        {superCar.topSpeedKmph}kmph </li> );

    return (<ol> {carItems}</ol>); 
}


export default List
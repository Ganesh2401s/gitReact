import Header from './Header.jsx'
import UserCard from './UserCard.jsx'
import Footer from './Footer/Footer.jsx'
import Button from './Button.jsx'
import Table from './Table/Table.jsx'
import Student from './Student.jsx'
import Player from './Player.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import DynamicList from './DynamicList.jsx'
import StudentList from './StudentList.jsx'
import Button2 from './Button2.jsx'
import MyHook from './MyHook.jsx'
import MyHook2 from './MyHook2.jsx'
import MyComponent from './MyComponent.jsx'
import MyComponent2 from './MyComponent.jsx'
import './App.css'

function App() {

  const superCars = [
    {id: 1, carName : "Bugatti Chiron", topSpeedKmph:500}, 
    {id: 2, carName : "Lamborghini Urus", topSpeedKmph : 200}, 
    {id: 3, carName : "Bugatti Divo", topSpeedKmph : 520}, 
    {id: 4, carName : "Laferarri Aperta", topSpeedKmph : 380}, 
    {id: 5, carName : "Mercedes Maybach", topSpeedKmph: 350}];

    const cars = [
      {id:6, carName : "Mahindra Scorpio", topSpeedKmph : 150 },
      {id:7, carName : "Mahindra Thar", topSpeedKmph : 30},
      {id:8, carName : "Honda City", topSpeedKmph : 180 },
      {id:9, carName : "Hyundai Verna", topSpeedKmph : 170 },
      {id:10, carName : "Innova", topSpeedKmph : 120 }];


  return (
    <>
         <Header />
         <UserGreeting isLoggedIn = {false} userName = "Ganesh Singh"/>
         <UserCard />
         <Table />
         <Button />
         <Student name = "Abhinav" rollNum = {2406001} depart = "Microbiology" isSportsGuy = {true}/>
         <Student name = "Karan" rollNum = {2406002} depart = "Chemistry" isSportsGuy = {true}/>
         <Student name = "Arjun" rollNum = {2406003} depart = "Computer Science" isSportsGuy = {true}/>
         <Student />
          
        <Player name = "Lionel Messi"/> 
        <Player name = "Cristiano Ronaldo"/> 
        <Player />

        <List />
        <DynamicList item = {superCars} category = "Super Cars"/>
        <DynamicList item = {cars} category = "Cars"/>
        <StudentList department = "Microbiology" yearOfAdmission = {2024} collegeName = "Bhaskaracharya College of Applied Sciences"/>
        <Button2 />
        <Footer /> 
        <MyHook /> 
        <MyHook2 /> 
        <MyComponent /> 
        <MyComponent2 /> 

    </>
  );
}

export default App

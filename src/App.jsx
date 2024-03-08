import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './Book'

function App() {
  
  const book =[
    {id: 1, name: 'physics', price: 200},
    {id: 2, name: 'Math', price: 200},
    {id: 3, name: 'Chysics', price: 200},
    {id: 4, name: 'bysics', price: 200},
  ]



  const actors =['shakib', 'Raj', 'jasim', 'Rubel']

  const singers =[
    {id: 1, name: 'Toni kakhar', age: 24},
    {id: 2, name: 'Neha kakhar', age: 24},
    {id: 3, name: 'Arjit sing ', age: 54},
    {id: 4, name: 'Shakib sing ', age: 14},
  ]

  return (
    <>
      
      <h1>Vite + React</h1>

      <BookStore books={book}></BookStore>



      {/* {
        singers.map(singer => <Singer singer={singer}></Singer>)
      } */}

{/* 
      <Actor name={'bappa Raz'}></Actor>

    {
      actors.map(actore =><Actor name={actore}></Actor>)
    } */}

    

      {/* <Todo
       task="learn react"
        idDone={true}></Todo>
      <Todo
       task="Explore core" 
       isDone={false}></Todo>
      <Todo 
      task="Try jsx" 
      isDone={true}></Todo> */}
      {/* <Device name='laptop' price='55'></Device>
      <Device name='mobile' price='17'></Device>
      <Device name='watch' price='3'></Device>
      <Person></Person>
      <Student score="99" grade="7"></Student>
      <Student grade={12} score="95"></Student>
      <Student ></Student>
      <Developer></Developer> */}
     
    </>
  )
}
function Device(props){
  return <h2>This device:{props.name} price: {props.price} </h2>
}

function Person(){

  const age = 25;
  const money = 20;
  const person = {name: 'shakib', age: 12}
  return <h3> I am a {person.name} whit age: {age + money}</h3>

}
const {grade, score} = {grade: '7', score: '99'};


function Student({grade=1, score=0}) {
  return (
  <div className='student'>
    <h3>This is a Student</h3>
    <p>Class: {grade}</p>
    <p>score: {score}</p>
  </div>
  )
}

function Developer(){
  // const DeveloperStyle = {
  //   margin: '20px',
  //   padding: '20px',
  //   border: '2px solid purple',
  //   borderRadius: '10px',

  // }

  return (
    <div style={{
      margin: '20px',
      padding: '20px',
      border: '2px solid purple',
      borderRadius: '10px',
  
    }}>
      <h5>Devo devo</h5>
      <p>Coding : </p>
    </div>
  )
}

export default App

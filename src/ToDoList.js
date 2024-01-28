import React, { useState } from "react";
import './App.css'

function ToDoList(){

    const[todo,settodo] = useState('')
    const[todoList,settodoList] = useState([])

    const addHandler =()=>{
        let newArr = [...todoList]
        let newItem ={
            id:Math.random(),
            value:todo
        }
        newArr.push(newItem)
        settodoList(newArr)
        settodo('')
    }
    const onDeletion = (Id)=>{
        //settodoList(todoList.filter((_,item) => item !==idx))
        settodoList(todoList.filter(item => item.id !== Id))
    }
    return <>
    <h1 className="header">To Do List</h1>
    <input type="text"
     className="input-text"
     onChange={e =>settodo(e.target.value)} value={todo}/>

    <input type="button"
     className="btn" value="Add"
     onClick={()=> addHandler()}/>
    {
        todoList.map((element,idx)=>
        <div className="list">
         <ul>
            <li>
            <input type="checkbox" className="checkbox"></input>
            <label>{element.value}</label>
          <button className="delete-btn" onClick={()=>onDeletion(element.id)}>Delete</button>
          </li>
          </ul>
          </div>)

    }
    </>
}




export default ToDoList;
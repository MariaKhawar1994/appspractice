// Todo list is read a list, add a task, mark a task, delete a task, edit a task, view a subset of task


import React,{useState} from 'react'
import './TodoList.css';

function TodoList () {
    // use for input and button
    const [newItem, setNewItem] = useState("");
    // creating an new array to hold these items
    const [items, setItems]= useState([]);
    function addItem(){
        // when its nothing it show this
        if(!newItem){
            alert("Press or enter an item");
            return;
        }
        // array hold item
        const item={
            // Math.floor() is round down and return largest integer less than or equal to given number
            // Math.random() is return floation point that greater or equal to 0 and less than 1
            id: Math.floor(Math.random()*1000),
            value: newItem
        };
        // array
        setItems(oldList =>[...oldList,item]);
        setNewItem("");
    }
   
   
    // for deleting an items
    function deleteItem(id){
        // make new array
        // filter() create new array filled with elements that pass a test provided by function
        const newArray=items.filter(item=>item.id!==id);
        setItems(newArray);
    }
  return (
    <div>
        <h1>Hello Todo List App</h1>
        <input
        type="text"
        placeholder='Add an Item...'
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}/>
        <button onClick={()=>addItem()}>Add</button>
        <ul>
            {items.map(item =>{
                return(
                    <li key={item.id}>{item.value}
                    <button className='delete-button' onClick={()=> deleteItem(item.id)}>❌ </button>
                    </li>
                )}
                )}
        </ul>
    </div>
  )
}

export default TodoList
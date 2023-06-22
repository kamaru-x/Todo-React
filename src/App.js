import './App.css';
import { useState } from 'react';

function App() {
  const [toDos,setTodos] = useState([])
  const [toDo,setTodo] = useState('')
  const handleDelete = (object) => {setTodos(toDos.filter((obj) => obj.id !== object.id));};
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i className="fas fa-plus" onClick={()=>setTodos([...toDos,{id:Date.now(),text:toDo,status:false}])}></i>
      </div>
      <div className="todos">
        { toDos.map((object)=>{
          return(
            <div className="todo">
              <div className="left">
                <input onChange={(e)=>{
                  console.log(e.target.checked)
                  console.log(object)
                  setTodos(toDos.filter(object2=>{
                    if (object2.id===object.id){
                      object2.status=e.target.checked
                    }
                    return object2
                  }))
                }} value={object.status} type="checkbox" name="" id="" />
                <p>{object.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times" onClick={()=>{
                  console.log(object)
                  handleDelete(object)
                }}></i>
              </div>
            </div>
          )
        })}

        {toDos.map((object)=>{
          if(object.status){
            return(<h1>{object.text}</h1>)
          }
          return null
        })}
      </div>
    </div>
  );
}

export default App;
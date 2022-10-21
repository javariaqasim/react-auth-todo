import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import React, { useState } from "react";



function Home(){

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(0);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (editId) {
        const editTodo = todos.find((i) => i.id === editId);
        const updatedTodos = todos.map((t) =>
          t.id === editTodo.id
            ? (t = { id: t.id, todo })
            : { id: t.id, todo: t.todo }
        );
        setTodos(updatedTodos);
        setEditId(0);
        setTodo("");
        return;
      }
  
      if (todo !== "") {
        setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
        setTodo("");
      }
    };
  
    const handleDelete = (id) => {
      const delTodo = todos.filter((to) => to.id !== id);
      setTodos([...delTodo]);
    };
  
    const handleEdit = (id) => {
      const editTodo = todos.find((i) => i.id === id);
      setTodo(editTodo.todo);
      setEditId(id);
    };
  
    // const date = new Date();
    // document.write(date);



    return (
    
    <>

<div className="container">
        <h1 style={{
          color: "black"
        }}>TODO APP</h1>


        <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          editId={editId}
          setTodo={setTodo}
        />

        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    
    
    </>
    )
}

export default Home
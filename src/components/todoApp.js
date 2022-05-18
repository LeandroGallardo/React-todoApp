import { useState } from "react"
import Todo from "./todo";
import './todoApp.css'

export default function TodoApp(){
    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState([]);

    // function handleClick(e){
    //     e.preventDefault();
    //     setTitle('lio')
    // }
    function handleChange(e){
       const value = e.target.value
        setTitle(value)
    }
    function handleSubmit(e){
        e.preventDefault();

        console.log(e)
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }

        const temp = [...todos];
        temp.unshift(newTodo)

        setTodos(temp)

        setTitle("");
    }
    function handleUpdate(id, valor){
        const temp = [...todos]
        const item = temp.find(item => item.id === id)
        item.title = valor;

        setTodos(temp);
    }
    function handleDelete(id){
        const temp = todos.filter((item) => item.id !== id);
        console.log(temp, 'temp')
        setTodos(temp);
    }
    return (
        <div className="todoContainer">
            <form className="todoCreateForm" onSubmit={handleSubmit}>
                <input onChange={handleChange} className="todoInput" value={title}/>
                <input onClick={handleSubmit} type="submit" value="Create todo" className="buttonCreate"/>

                {title}
            </form>
            <div className="todosContainer">
                {
                    todos.map(item => (
                        <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}></Todo>
                    ))
                }
            </div>

        </div>
    )
}
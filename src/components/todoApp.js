import { useState } from "react"
import Todo from "./todo";

export default function TodoApp(){
    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState([]);

    function handleClick(e){
        e.preventDefault();
        setTitle('lio')
    }
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

    }
    return (
        <div className="todoContainer">
            <form className="tofoCreateForm" onSubmit={handleSubmit}>
                <input onChange={handleChange} className="todoInput" />
                <input onClick={handleSubmit} type="submit" value="Create todo" className="buttonCreate"/>

                {title}
            </form>
            <div className="todosContainer">
                {
                    todos.map(item => (
                        <Todo key={item.id} item={item}></Todo>
                    ))
                }
            </div>

        </div>
    )
}
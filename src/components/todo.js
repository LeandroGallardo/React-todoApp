import { useState } from "react"

export default function Todo({item, onUpdate, onDelete}){


    const [isEdit, setIsEdit] = useState(false);
    function FormEdit(){
        const [newValue, setNewValue] = useState(item.title);
        
        function handleSubmit(e){
            e.preventDefault();

        }
        function handleChange(e){
            const value = e.target.value;
            setNewValue(value)
        }
        function handleClickUpdateTodo(e){
            onUpdate(item.id, newValue);
            setIsEdit(false)
        }
        return (
            <form className="todoUpdateForm" onSubmit={handleSubmit}>
                <input type="text" className="todoInput" onChange={handleChange} value={newValue}/>
                <button className="button" onClick={handleClickUpdateTodo}>update</button>
            </form>
        )
    }
    function Todoelement(){
        return (
            <div className="todoInfo">
                <span className="todotitle">{item.title}</span>
                <button className="button" onClick={()=> setIsEdit(true)}>edit</button>
                <button className="buttonDelete"  onClick={(e) => onDelete(item.id)}>delete</button>
            </div>
        )
    }

    return (<>
        <div className="todo">
            { isEdit ? <FormEdit /> : <Todoelement /> }
        </div>
        
        </>
    )
}
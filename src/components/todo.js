import { useState } from "react"

export default function Todo({item}){

    const [isEdit, setIsEdit] = useState(false);

    return (<>
        <div className="todo">
            {isEdit ? <div> modo editar</div> :  <div> no se puede editar</div>}
        </div>
        <div>
            {item.title}
            <button onClick={()=> setIsEdit(true)}>edit</button>
            <button>delete</button>
        </div>
        </>
    )
}
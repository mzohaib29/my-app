import React from "react";


function TodoItem(props){
    return (
        <div className = "todo-item">
        <input type = "checkbox"
               checked={props.item.complete}
               onChange={() => props.handleChange(props.item.id)}
        />
        <p>{props.item.text}</p>
        </div>
    )
}
export default TodoItem
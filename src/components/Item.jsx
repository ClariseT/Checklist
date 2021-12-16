import React from 'react'

export function Item({ todo, toggleTodo }) {
    const {id, task, completed} = todo;

    const handleClick = () => {
        toggleTodo(id);
    };
        
    return (
     <li>
        <input type="checkbox" checked={completed} onChange={handleClick}/>
        {task}
    </li>
    );
}

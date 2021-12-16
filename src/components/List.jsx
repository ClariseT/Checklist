import React from 'react'
import { Item } from './Item';

export function List({todos, toggleTodo}) {
    return (
        <ul>
           {todos.map((todo)=> (
               <Item  key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
           ))} 
        </ul>
    );
}

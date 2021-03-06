import React, {Fragment, useState, useRef, useEffect} from "react";
import { List } from "./components/List";
import {v4 as uuidv4} from "uuid";
import "./styles.css";


const KEY = "todoApp.todos";

export function App() {
    const taskRef= useRef();
    const [todos, setTodos] = useState([{
        id:1,
        task: "Tarea",
        completed: false
    },
    ]);
    
    useEffect(()=> {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos));
    }, [todos]);

    const toggleTodo =(id) => {
         const newTodos = [...todos];
         const todo = newTodos.find((todo) => todo.id === id);
         todo.completed = !todo.completed;
         setTodos(newTodos);
    };

    const handleAdd = (event) => {
        const task = taskRef.current.value;
        if (task === "") return;

        setTodos((prevTodos) => {
            return [...prevTodos, {id: uuidv4(), task, completed:false}];
        });

        taskRef.current.value = null;
    };
    
    const handleClearAll = () => {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    };

    return (
        <Fragment>
            <section className="container">
                <div className="task">
                    <List todos={todos} toggleTodo = {toggleTodo} />
                </div>

                <input className="input" ref={taskRef} type="text" placeholder="Nueva Tarea"/>
                <button className="button" onClick={handleAdd}> ✚ </button>
                <button  className="button" onClick={handleClearAll}> 🗑 </button>
                <div className="divInfo">
                    Te quedan {todos.filter((todo) => !todo.completed).length} tareas por terminar
                </div>
             </section>
        </Fragment>

    );
}
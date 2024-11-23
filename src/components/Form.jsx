import { useState } from "react";
import styles from './form.module.css'
export default function Form({ todos , setTodos}){
    const [todo, setTodo] = useState({name: '', done: false});
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos, todo])
        setTodo({name: '', done: false})
    }
    return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
        <input className={styles.modernInput} 
        onChange={(event)=> setTodo({name: event.target.value, done: false}) }
        value={todo.name}
        type="text"
        placeholder="Enter Todo Item" />
        <button className={styles.modernButton} type="submit">Add</button>
        </div>
    </form>)
}
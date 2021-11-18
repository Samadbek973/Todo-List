import React, { useRef, useState } from 'react'

const TodoForm = (props) => {
    const inputRef = useRef(null)
    const [input, setInput] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        props.onSubmit({
            id: Math.floor(Math.random()* 100000),
            text: input
        })

        setInput('')
    }
 
    const handleChange = e => {
        setInput(e.target.value)
      
    }



    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Введите задачу" className="todo-input" ref={inputRef} name="text" value={input} onChange={handleChange}/>
            <button className="todo-button">Добавить</button>

        </form>
    )
}

export default TodoForm

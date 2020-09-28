import React, {  useState } from "react";

type FormElement = React.FormEvent<HTMLFormElement>

interface ITodo {
    text: string
    complete: boolean
}

const Form = () => {

    const [value, setValue] = useState<string>('')
    const [todos, setTodos] = useState<ITodo[]>([])

    const handleSubmit = (e: FormElement): void => {
        e.preventDefault()
        addTodo(value)
        setValue('')
    }

    // console.log(todos)

    const addTodo = (text: string): void => {
        const newTodos: ITodo[] = [...todos, {text, complete: false}]
        setTodos(newTodos)
    }

    const completeTodo = (index: number) => {

        // console.log('index...', index)

        const newTodos: ITodo[] = [...todos]
        newTodos[index].complete = !newTodos[index].complete
        setTodos(newTodos)
    }

    const removeTodo = (index: number): void => {
        const newTodos: ITodo[]= [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Super Todo List</h1>
      <h6>click the task when completed</h6>
      <h6>doouble click the task to remove</h6>
      <form onSubmit={handleSubmit}>
          <input type="text" value={value} onChange={e => setValue(e.target.value)} required />
          <button type="submit">Add</button>
      </form>
      <section style={{ width: '100%' }}>
          {todos.map((todo: ITodo, index: number) => {

              
          return (<div>
            <div key={index} onDoubleClick={() => removeTodo(index)} onClick={() => completeTodo(index)} style={{ display: 'inline-block', textDecoration: todo.complete ? 'line-through' : '' }}> {todo.text}&#32;&#32;&#32;&#32;&#32;</div>
            {/* <button style={{display: 'inline-block', marginLeft: '5px'}} onDoubleClick={() => removeTodo(index)}>&times;</button> */}
          </div>)
        //   (<>
        //   {todo.complete ? <div key={index} style={{color:'red', textDecoration: 'line-through'}}>{todo.text}</div> 
        //   : <div key={index} onClick={() => completeTodo(index)}>{todo.text}</div>}
        //   </>)
          })}
      </section>
    </div>
  );
};

export default Form;

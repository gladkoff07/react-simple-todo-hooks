import { useState } from 'react'
import Form from './componets/Form'
import Todo from './componets/Todo'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = userInput => {
    if (userInput) {
      const newTodo = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false,
      }
      setTodos([...todos, newTodo])
    }
  }

  const removeTodo = id => {
    setTodos([...todos.filter(todo => todo.id !== id)])
  }

  const changeTodo = id => {
    setTodos([
      ...todos.map(todo =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ])
  }

  return (
    <div className='App'>
      <header>
        <h1>Список задач: {todos.length}</h1>
      </header>
      <Form addTodo={addTodo} />
      {todos.map(todo => {
        return (
          <Todo
            todo={todo}
            removeTodo={removeTodo}
            changeTodo={changeTodo}
            key={todo.id}
          />
        )
      })}
    </div>
  )
}

export default App

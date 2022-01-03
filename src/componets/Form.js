import { useState } from 'react'

function Form({ addTodo }) {
  const [userInput, setUserInput] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addTodo(userInput)
    setUserInput('')
  }

  const handleChange = e => {
    setUserInput(e.currentTarget.value)
  }

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={userInput}
        onChange={handleChange}
        onKeyDown={onKeyPress}
        placeholder='Введите значение...'
      />
      <button>Сохранить</button>
    </form>
  )
}

export default Form

function Todo({ todo, removeTodo, changeTodo }) {
  return (
    <div key={todo.id} className='item-todo'>
      <div
        className={todo.complete ? 'item-text strike' : 'item-text'}
        onClick={() => changeTodo(todo.id)}
      >
        {todo.task}
      </div>
      <div className='item-delete' onClick={() => removeTodo(todo.id)}>
        X
      </div>
    </div>
  )
}

export default Todo

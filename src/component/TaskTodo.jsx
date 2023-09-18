import React,{useContext} from 'react'
import '../App.css'
import {TodosContext} from '../App'


function TaskTodo() {
    const {setEdited,setEdit,Dispatch,todos} = useContext(TodosContext)
  return (
    <div>
        {
        todos.length <= 0 && <div className='messegetask'>There is no Task here....</div>
      }
      <div className='task-box'>
        {todos.map(todo => (
          <div key={todo.id} className='task'>
            <input type="checkbox" onChange={() => Dispatch({
              type: 'finish',
              playload: { id: todo.id }
            })} />
            <div className={todo.finish ? "finish" : ""}>
              {todo.text}
            </div>
            <button onClick={() => Dispatch({
              type: 'remove',
              playload: { id: todo.id }
            })}>Delete</button>
            <button onClick={() => {
              setEdit(true)
              setEdited(todo)
            }} >eddit</button>
          </div>)
        )
        }
      </div>
    </div>
  )
}

export default TaskTodo
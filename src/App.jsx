import { useReducer, useState } from 'react';
import './App.css';
const intialTodos = [{
  id: 0,
  text: 'Lern React',
  finish: false,
}]
function reducer(state, action) {
  switch (action.type) {
    case 'addtodo':
      return [
        ...state, {
          id: state.length + 1,
          text: action.playload,
          isedit: false,
        }]
    case 'remove':
      return state.filter(todo => todo.id !== action.playload.id);
    case 'finish':
      return state.map((todo) => {
        if (todo.id === action.playload.id) {
          return { ...todo, finish: !todo.finish }
        } else {
          return todo
        }
      }
      )
    case 'edit':
      return state.map((todo) => {
        return todo.id === action.playload.id
          ? { ...todo, text: action.playload.text } : todo
      })
    default: {
      return state
    }
  }
}
function App() {
  const [edited, setEdited] = useState()
  const [edit, setEdit] = useState(null)
  const [toDo, setToDo] = useState()
  const [todos, Dispatch] = useReducer(reducer, intialTodos)
  function oninputchange(e) {
    setToDo(e.target.value)
  }
  function onedit(e) {
    setEdited({ ...edited, text: e.target.value })
  }
  function editting(e) {
    e.preventDefault();
    Dispatch({
      type: 'edit',
      playload: { id: edited.id,text: edited.text }
    })
    setEdit(false)
    setEdited(null)
  }
  function onsubmit(e) {
    e.preventDefault();
    if (toDo !== "") {
      Dispatch({
        type: 'addtodo',
        playload: toDo.trim()
      }
      )
    }
    setToDo("")
  }
  console.log(edited)
  console.log('array', todos)
  console.log('editing', edited)
  return (
    <div className='app'>
      <h1>Task Todo</h1>
      {edit ? (
        <form>
          <input type="text"
            name='editimg'
            placeholder='editing'
            value={edited.text}
            onChange={onedit} />
          <button onClick={editting}>save</button>
        </form>
      ) : (
        <form >
          <input type="text"
            name="note"
            id={todos.id}
            onChange={oninputchange}
            value={toDo}
            placeholder='Add New Task' />
          <button onClick={onsubmit}>add</button>
        </form>
      )}
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

export default App

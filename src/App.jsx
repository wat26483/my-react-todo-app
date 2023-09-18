import { useReducer, useState,createContext } from 'react';
import './App.css';
import FormInput from './component/FormInput';
import TaskTodo from './component/TaskTOdo';
import TaskReducer, { intialTodos } from './TaskConText/TaskReducer';
export const TodosContext = createContext(null)
function App() {
  const [edited, setEdited] = useState()
  const [edit, setEdit] = useState(null)
  const [toDo, setToDo] = useState('')
  const [todos, Dispatch] = useReducer(TaskReducer, intialTodos)
  return (
    <TodosContext.Provider value={
      {
        edited, setEdited,edit, setEdit,toDo, setToDo,todos, Dispatch
      }
    }>
    <div className='app'>
      <h1>Task Todo</h1>
      <FormInput/>
      <TaskTodo/>
    </div>
    </TodosContext.Provider>
  )

}

export default App

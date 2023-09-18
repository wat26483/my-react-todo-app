import React,{useContext} from 'react'
import '../App.css'
import {TodosContext} from '../App'

function FormInput() {
    const {edit,edited,toDo,setToDo,setEdited,setEdit,Dispatch,todos} = useContext(TodosContext)

    function onedit(e) {
        setEdited({ ...edited, text: e.target.value })
    }
    function editting(e) {
        e.preventDefault();
        Dispatch({
            type: 'edit',
            playload: { id: edited.id, text: edited.text }
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
      function oninputchange(e) {
        setToDo(e.target.value)
      }


    return (
        <div>
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
        </div>
    )
}

export default FormInput
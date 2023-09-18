import React from 'react'

export default function TaskReducer(state, action) {
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

  export const intialTodos = [{
    id: 0,
    text: 'Lern React',
    finish: false,
  }] 


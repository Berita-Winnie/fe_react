import React from 'react'
import { useState } from 'react'
import useTaskstore from '../store.js/useTaskstore'

const TaskForm = () => {
  const [text, setText] = useState('')
  const addTask = useTaskstore((state) => state.addTask)
  const handleSubmit = (e) => {
    e.preventDefault()
    addTask({ id: Date.now(), title: text, completed: flase })
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Task"
        className="p-2 mr-2 w-60 border rounded-md border-gray-300"
      />
      <button ype="submit" className="p-2 rounded-md bg-green-500 text-white">
        Add Task
      </button>
    </form>
  )
}

export default TaskForm

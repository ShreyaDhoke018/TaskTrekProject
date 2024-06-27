import React from 'react'
import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todoIcon from "./assets/direct-hit.png"
import doingIcon from "./assets/glowing-star.png"
import doneIcon from "./assets/check-mark-button.png"

const App = () => {
  return (
    <div className='app'>
      <TaskForm />
      <main className='app_main'>
        <TaskColumn name="To Do" icon={todoIcon} />
        <TaskColumn name="Doing" icon={doingIcon} />
        <TaskColumn name="Done" icon={doneIcon} />
      </main>
    </div>
  )
}

export default App

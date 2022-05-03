import React from 'react'
import axios from 'axios'
import './TaskCard.css'

function TaskCard(props) {

  async function deleteTask(){
    
    const result = await axios.post('/delete/task', {
      id: props.id
    })
  }
  
  return (
    <div className="task-card">
        <h2>{props.id}</h2>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={deleteTask}
        >
          Delete
        </button>
    </div>
  )
}

export default TaskCard
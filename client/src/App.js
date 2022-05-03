import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import TaskCard from './component/TaskCard/TaskCard';

function App() {

  // all tasks
  const [tasks, setTasks] = useState([]);

  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  useEffect(()=>{
   
    async function fetchData(){
      const response = await axios.get('/get/all/task');
      setTasks(response.data);
    }
    fetchData();
  });

  async function AddTask(){
    const res = await axios.post('/add/task',{
      id: Math.floor(Math.random() * 100),
      title: title,
      description: description
    })
  }

  async function UpdateTask(){
    const res = await axios.post('/update/task',{
      id: id,
      title: title,
      description: description
    })
  }



  return (
     <div className="container">
       <div className="row">
          <div className="col-md-6">
          <h1 className="text-center">All Task</h1>
            {
              tasks.map((task, index) =>{
                return (
                <TaskCard 
                  title={task.title} 
                  description={task.description}
                  id={task.id}
                  key={index}
                  />)
              })
            }
          </div>
          <div className="col-md-6">
            <h1 className="text-center">Add Task</h1>
            <form>
              <div className="form-group">
                <label htmlFor="id">ID</label>
                <input type="text"
                className="form-control" 
                id="id" 
                onChange={(e)=>setId(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text"
                className="form-control" 
                id="title" 
                placeholder="Enter Title" 
                onChange={(e)=>{setTitle(e.target.value)}}/>
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" 
                id="description" 
                rows="3" 
                placeholder="Enter Description"
                onChange={(e)=>{setDescription(e.target.value)}}>
                </textarea>
              </div>

             <div className='row'>
                <div className="col-md-6">
                <button type="button" 
              className="btn btn-primary w-100 mt-5"
              onClick={AddTask}
              >Add Task</button>
                  </div>

                  <div className="col-md-6">
                  <button type="button" 
              className="btn btn-success w-100 mt-5"
              onClick={UpdateTask}
              >Update Task</button>
                  </div>
             </div>
            </form>
          </div>
       </div>
     </div>
  );
}

export default App;
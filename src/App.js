import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react"
import AddTask from "./components/AddTask";
import axios from "axios"
function App() {

  const [tasks, setTasks] = useState([]);

  const [showAddTask, setShowAddTask] = useState(false);

  const baseUrl = "http://localhost:8000/tasks"
  //CRUD =>  create, read, update, delete

  //Fetch tasks
  // const fetchTasks = async () => {
  //   const res = await fetch(baseUrl);
  //   const data = await res.json();
  //   console.log('data :>> ', data);
  // };
  //Fetch tasks with axios
  const fetchTasks = async () => {
    // const res = await axios.get(baseUrl);
    const { data } = await axios.get(baseUrl);
    // console.log('datas :>> ', data);
    setTasks(data);
  }
  useEffect(() => {
    fetchTasks();
  }, [])


  //*ADD TASK

  const addTask = async (newTask) => {
    await axios.post(baseUrl, newTask);

    fetchTasks();
  }

  // const addTask = async (newTask) => {
  //   const res = await fetch(baseUrl, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json"
  //     },
  //     body: JSON.stringify(newTask)
  //   });
  //   fetchTasks();

  // }

  // const addTask = (newTask) => {
  //   // console.log("add task from app.js");
  //   const id = Math.floor(Math.random() * 100 + 1);
  //   const addNewTask = { id, ...newTask };
  //   setTasks([...tasks, addNewTask]);
  // }

  //*TOGGLE DONE
  const toggleDone = async (toggleDoneId) => {
    // const res = await fetch(`${baseUrl}/${toggleDoneId}`);
    // const data = await res.json()
    // const updatedTask = { ...data, isDone: !data.isDone }
    // console.log('updatedTask :>> ', updatedTask);

    // await fetch(`${baseUrl}/${toggleDoneId}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-type": "application/json"
    //   },
    //   body: JSON.stringify(updatedTask)
    // })



    //*with axios
    const { data } = await axios.get(`${baseUrl}/${toggleDoneId}`);
    const updatedTask = { ...data, isDone: !data.isDone }

    await axios.put(`${baseUrl}/${toggleDoneId}`, updatedTask);

    fetchTasks();
  }


  // const toggleDone = (toggleDoneId) => {
  //   setTasks(
  //     tasks.map((task) => task.id === toggleDoneId ? { ...task, isDone: !task.isDone } : task)
  //   )
  // }


  //SHOW ADD TASK
  const toggleShow = () => setShowAddTask(!showAddTask);

  //DELETE TASK


  const deleteTask = async (deletedTaskId) => {
    await axios.delete(`${baseUrl}/${deletedTaskId}`);
    fetchTasks();
  }

  // const deleteTask = async (deletedTaskId) => {
  //   await fetch(`${baseUrl}/${deletedTaskId}`, {
  //     method: "DELETE"
  //   });
  //   fetchTasks();
  // }

  // const deleteTask = (deletedTaskId) => {
  //   // console.log('delete :>> ', deletedTaskId);
  //   setTasks(tasks.filter((task) => task.id !== deletedTaskId))
  // }



  //?    DELETE ALL TASKS

  return (
    <div className="container">
      <Header title="TASK TRACKER" showAddTask={showAddTask} toggleShow={toggleShow} />
      {showAddTask && <AddTask addTask={addTask} />}
      {
        tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone} /> : <p style={{ textAlign: "center" }}>NO TASK TO SHOW</p>
      }

    </div>
  );
}

export default App;

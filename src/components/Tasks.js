import Task from "./Task";

const Tasks = ({tasks, onDelete, onToggle}) => {
  
  
//   setTasks([...tasks, { id: 3,
//     text: "Food Shopping",
//     day: "Feb 5th at 2:30pm",
//     reminder: false}])
//^^^^ Trying to add a new item to the array in the state but it isnt working//
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task = {task} onDelete={onDelete} onToggle={onToggle}></Task>
      ))}
    </>
  );
};

export default Tasks;

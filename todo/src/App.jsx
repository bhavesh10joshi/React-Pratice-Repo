import { useState } from 'react'

function App() {
  const [Todo, settodo] = useState([]);

  function addtodo()
  {
    settodo([
    ...Todo,
    {
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      done: true,
    },
]);
  }
 
  return <>
    <input type="text" placeholder="enter the title" id="title"></input>
    <input type="text" placeholder="enter the description" id="description"></input>
    <button onClick={addtodo}>Add Todo</button>
    <br />
    {Todo.map((todo) => (
        <Todos
          title={todo.title}
          description={todo.description}
          done={todo.done}
        />
      ))}
  </>
}
function Todos(props)
{
  return <>
  <h1>{props.title}</h1>
  <h1>{props.description}</h1>
  <h1>{props.done ? "task is done" : "task is not done"}</h1>
  </>
}

export default App

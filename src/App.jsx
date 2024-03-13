import data from "./data";
import { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";

function App() {

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(data);
  const [popUp, setPopUp] = useState(false);
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleClick = () => {
    setTodos((prev) => [...prev,{task:task}]);
  };
  console.log(task);
  return (
    <div className="flex-col gap-4 flex justify-center items-center h-screen max-w-2xl m-auto">
      <h2 className="text-xl tex">TO DO APP</h2>
      <div className="flex gap-3 w-full justify-center content-center items-center">
        <input
          className="border rounded-lg p-4 w-full"
          type="text"
          placeholder="search TODO"
          
        />

        <button
          className="border rounded-lg w-32 h-12 bg-green-700 text-white font-medium"
          onClick={() => {
            setPopUp(true);
          }}
        >
          ADD TODO
        </button>
        <div
        className={` gap-4 flex-col justify-between w-full max-w-md fixed border rounded-xl centered ${
          popUp ? "flex" : "hidden"
        }`}
      >
        <input
        value={task}
          onChange={handleChange}
          className="border rounded-lg p-3 "
          type="text"
          placeholder="ADD TODO"
        />
        <div className="flex gap-2 justify-end">
          <button
            className="border rounded-lg px-4 py-2  bg-green-700 text-white font-medium"
            onClick={handleClick}
          >
            ADD
          </button>
          <button
            className="border rounded-lg px-4 py-2 bg-gray-400 text-white font-medium"
            onClick={() => {
              setPopUp(false);
            }}
          >
            Cancel
          </button>
        </div>
        
      </div>
      </div>
      <Todos todo={todos} setTodos = {setTodos}  />
    </div>
  );
}

export default App;

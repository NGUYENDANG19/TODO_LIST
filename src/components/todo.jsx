import { useState } from "react";
import DoneTask from "./donetask";
import UndoneTask from "./undotask";
import { FaPen } from "react-icons/fa";


function ToDo() {
  // "usesState" tao va luu mot bien moi State, bien se dc thay doi thong qua "setState" .  (homework,homework{ok, not})
  const [toDoText, setToDoText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [popUp, setPopUp] = useState(false);
  console.log(todoList);

  return (
    <div className="flex gap-4 flex-col w-full ">
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
      </div>
      {/* <DoneTask dataToDo={todoList} /> */}
      <UndoneTask dataToDo={todoList}  />

      {/* popup */}
      <div
        className={` gap-4 flex-col justify-between w-full max-w-md fixed border rounded-xl centered ${
          popUp ? "flex" : "hidden"
        }`}
      >
        <input
          value={toDoText}
          onChange={(e) => {
            setToDoText(e.target.value);
          }}
          className="border rounded-lg p-3 "
          type="text"
          placeholder="ADD TODO"
        />
        <div className="flex gap-2 justify-end">
          <button
            className="border rounded-lg px-4 py-2  bg-green-700 text-white font-medium"
            onClick={() => {
              setPopUp(false);
              setTodoList([...todoList, {name:toDoText, status:false}]);
            }}
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
      
      {/*  */}
    </div>
    
  );
}
export default ToDo;

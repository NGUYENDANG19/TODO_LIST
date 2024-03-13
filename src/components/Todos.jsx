import React, { useState } from "react";
import SingleTodo from "./SingleTodo";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Todos = ({ todo, setTodos }) => {
  const [showCompleted, setShowCompleted] = useState(false); // (1)
  const handleAddToCompleted = (task) => {
    // Thêm công việc đã đánh dấu vào phần "show completed"
    // Implement logic here
  };

  const handleDelete = (task) => {
    setTodos(todo.filter((val) => val.task !== task));
  };

  return (
    <div className=" w-full items-center justify-between bg-white p-4 rounded-lg border border-gray-200 shadow ">
      {todo.map((todo, index) => (
        <SingleTodo
          task={todo.task}
          key={index}
          handleDelete={handleDelete}
          showCompleted={showCompleted} // (4)
          completed={todo.completed}
          handleAddToCompleted={handleAddToCompleted} // Truyền hàm xử lý thêm công việc vào phần "show completed"

        />
      ))}
      <div>
        <button
          className="flex  justify-between mt-4 items-center border rounded-xl p-3 w-[180px] h-auto bg-green-700 text-white font-medium"
          onClick={handleAddToCompleted} // (3)
        >
          {showCompleted ? "Hide Completed" : "Show Completed"}{" "}
          <FaRegArrowAltCircleRight />
        </button>
      </div>
    </div>
  );
};

export default Todos;

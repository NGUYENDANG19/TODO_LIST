import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaPen } from "react-icons/fa";
import { FaCheckToSlot } from "react-icons/fa6";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const SingleToDo = ({ task, handleDelete, showCompleted, completed,handleAddToCompleted }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleCheck = () => {
    setIsDone(!isDone);
    if (!completed) {
        handleAddToCompleted(task); // Gọi hàm xử lý thêm công việc vào phần "show completed"
      } // Sử dụng setIsDone thay vì handleToggleComplete
  };

  const [isDone, setIsDone] = useState(false);

  if (!showCompleted && completed) {
    return null;
  }

  return (
    <div className="flex items-center justify-between mt-2.5">
      {isEdit ? (
        <input
          className="mt-2.5 flex-col w-[482px] items-center justify-between bg-white p-4 rounded-lg border border-gray-200 shadow"
          type="text"
          defaultValue={task}
        />
      ) : (
        <h5 className={`mt-2.5 flex-col w-full items-center justify-between bg-white p-4 rounded-lg border border-gray-200 shadow ${isDone ? 'line-through' : ''}`}>
          {task}
        </h5>
      )}

      <div className="flex gap-3 mt-2.5 ml-3">
        <button
          className="border rounded-lg w-10 h-10 bg-red-600 hover:bg-red-700 flex items-center justify-center  text-white  "
          onClick={() => handleDelete(task)}
        >
          <RiDeleteBinLine />
        </button>

        <button
          className="border rounded-lg w-10 h-10 bg-blue-600 hover:bg-blue-800 flex items-center justify-center  text-white  "
          onClick={handleEdit}
        >
          <FaPen />
        </button>

        <button
          className="border rounded-lg w-10 h-10 bg-gray-400 hover:bg-green-500 flex items-center justify-center  text-white  "
          onClick={handleCheck}
        >
          <FaCheckToSlot />
        </button>
      </div>
    </div>
  );
};

export default SingleToDo;

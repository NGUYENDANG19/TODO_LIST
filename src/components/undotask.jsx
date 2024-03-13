import React from "react";

import { RiDeleteBinLine } from "react-icons/ri";
import { FaPen } from "react-icons/fa";
import { FaCheckToSlot } from "react-icons/fa6";
import Completed from "./completed";

export default function undotask({ dataToDo }) {
  return (
    <div>
      <div>
        
      </div>
      {/* ham map React , data phai khac nhau khi return , index la de danh dau theo id, */}
      {dataToDo.map((item, index) => {
        if (item.status === false) {
          return (
            <div
              key={index}
              className="mt-2.5 flex w-full items-center justify-between bg-white p-4 rounded-lg border border-gray-200 shadow "
            >
              {item.name}
              <div className="flex gap-3">
                <button
                  className="border rounded-lg w-10 h-10 bg-red-600 hover:bg-red-700 flex items-center justify-center  text-white  "
                  onClick={() => {}}
                >
                  <RiDeleteBinLine />
                </button>

                <button
                  className="border rounded-lg w-10 h-10 bg-blue-600 hover:bg-blue-800 flex items-center justify-center  text-white  "
                  onClick={() => {}}
                >
                  <FaPen />
                </button>

                <button
                  className="border rounded-lg w-10 h-10 bg-gray-400 hover:bg-green-500 flex items-center justify-center  text-white  "
                  onClick={() => {}}
                >
                  <FaCheckToSlot />
                </button>
              </div>
              
            </div>
           
          );
        }
      })}
      <Completed />
    </div>
  );
}

import { useState } from "react"
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function Completed({
   data

}){
    return(
    <div>
         <button
          className="flex  justify-between mt-4 items-center border rounded-xl p-3 w-[180px] h-auto bg-green-700 text-white font-medium"
          onClick={() => {}}
        >
          completed Todo2  <FaRegArrowAltCircleRight />
        </button>
        
    </div>)
}
export default Completed
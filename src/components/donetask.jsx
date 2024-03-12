import { useState } from "react"

function DoneTask({
    dataToDo

}){
    return(
    <div>
        {dataToDo.map(item => {
            return(
                <div key={item}>{item}</div> 
            
            )
        } )}
        
    </div>)
}
export default DoneTask
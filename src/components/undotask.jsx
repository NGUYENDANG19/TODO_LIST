function UndoneTask({
    dataToDo

}){
    return(
    <div>
        {/* ham map React , data phai khac nhau khi return , index la de danh dau theo id, */}
        {dataToDo.map((item,index) => {
            if(item.status === false){
                return(
                    <div key={index} className="border rounded-lg px-4 py-2 ">{item.name} </div> 
                
                )
            }
            
            
        } )}
        
    </div>)
}

export default UndoneTask
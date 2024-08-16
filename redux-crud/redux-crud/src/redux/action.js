 export  const addtodo=(tododata)=>{
      
    return{
          type:"add",
          payload:tododata
    }
}
export const addEdit=(id,text)=>{
      return{
            type:"edit",
            payload:{id,text}

      }
}
 export const addDelete=(id)=>{
      return{
            type:"delete",
            id

      }
 }
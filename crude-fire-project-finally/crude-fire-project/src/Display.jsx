import React, { useEffect, useState } from 'react'
import { addDoc, collection, deleteDoc, doc,  getDocs, updateDoc } from 'firebase/firestore';
import { firestore } from '../firebaseConfig';



export default function Dashboard() {
  
  const [name,SetName]=useState("");
  const [sub,SetSub]  =useState("");


  const [record,setRecord] = useState(null);
  const [editIndex,SetEditIndex] = useState(null);

  useEffect(()=>{
   fetchUser();
  },[])


  const fetchUser = async () =>{
    let querySnapshot = await getDocs(collection(firestore,"Students"))
    console.log(querySnapshot);
    let allData = querySnapshot.docs.map((doc)=>({docId: doc.id,...doc.data()
    }))
    setRecord(allData);

  }
 

  const handleSubmit =async () => {
   console.log(editIndex);

   if(editIndex === null || editIndex < 0){
    console.log("add doc" + editIndex);
    
    await addDoc(collection(firestore,"Students"),{
        name  , sub
  })
   }else{
    console.log("update doc" + editIndex);
    await updateDoc(doc(firestore,"Students",record[editIndex].docId),{

      name : name,
      sub  : sub,
    })
   }
    
    SetName("");
    SetSub("");
    SetEditIndex(null)
    fetchUser();

  }

  const handleDelete = async (index) => {
    await deleteDoc(doc(firestore,"Students",record[index].docId))
    let remainingData = record.filter((e,i) => i !== index);
    console.log(remainingData);

    setRecord(remainingData)
    
  }

  const handleEdit =  ((index) => {
    let singleData = record[index];
    SetName(singleData.name);
    SetSub(singleData.sub);
    SetEditIndex(index)
   })
    return (

  <div className=" border-[1px] bg-[white]  w-[100%] h-[580px] flex  justify-center items-center">
    <div className="sec1  bg-[black] rounded-[10px] flex justify-center items-center flex-col w-[50%] h-[400px] ">
     <div className="m w-[100%] h-[200px]  outline-none  flex flex-col justify-evenly items-center rounded">
      
     <input type="text" placeholder='Enter Youe Name ' onChange={(e)=> SetName(e.target.value)} value={name} className='in1  outline-none  border-[1px] w-[85%] h-[40px] border-[black] rounded-[5px]'/>
      <input type="text" placeholder='Enter Your Subject ' onChange={(e)=> SetSub(e.target.value)} value={sub} className='in2  border-[1px] outline-none w-[85%] h-[40px] border-[black] rounded-[5px]'/>
        <button onClick={handleSubmit} className='sbt w-[200px] h-[50px] border-[1px]  text-[20px] font-[600] capitalize bg-[black] text-[white] rounded-[5px] '>{editIndex==null ? "submit" : "update"}</button>
      
     </div>

      <table border="1"  width="100%"  align='center' >
        <thead style={{border:'1px ' ,height:'50px', color:'#E3B23C', fontSize:'20px' }}>
            <th>Name</th>
            <th>Subject</th>
            <th colSpan={2}>Edit/Delete</th>

        </thead>
        
          <tbody>
            {
                record ?
                record.map((e,i)=>{
                    return  <tr key={i} align='center' className=''  style={{border:'1px solid' ,height:'50px',}}>
                        <td style={{color:'white'}}>{e.name}</td>
                        <td style={{color:'white'}}>{e.sub}</td>
                        <td><button onClick={()=>handleEdit(i)} style={{padding:'5px 20px',backgroundColor:' black',color:'white'}} className='rounded-[5px] font-[600]'>Edit</button></td>
                        <td><button onClick={()=>handleDelete(i) } style={{padding:'5px 20px',backgroundColor:' black',color:'white'}} className='rounded-[5px] font-[600]'>Delete</button></td>
                    </tr>
                })
                :   <p>Loading</p>
            }
        </tbody>
       
      </table>
      </div>
    </div>
  )
}


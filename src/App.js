import React, { useEffect, useState } from 'react'
import { doc,updateDoc,addDoc,deleteDoc,collection,query, orderBy, onSnapshot } from "@firebase/firestore"
import { firestore } from './firebase'
const App = () => {
  let [emp,updateemp]=useState({id:'',empno:'',ename:''});
  let [data,updatedata]=useState([]);
  useEffect(()=>{
    const q = query(collection(firestore, 'emp'), orderBy('empno', 'desc'))
  onSnapshot(q, (querySnapshot) => {
    let d=querySnapshot.docs.map(doc => ({      
      ...doc.data(),
      id: doc.id
    }))
    updatedata(d);
  })
  },[data])
  function change(e)
  {
    updateemp({...emp,[e.target.name]:e.target.value})
  }
  return (
    <>
    <h1>App Component is running</h1>
    <table align='center' border="1px">
      <tr>
        <th>Id</th>
        <th>Empno</th>
        <th>Ename</th>
      </tr>
      {data.map((v,i)=>{
        return <tr key={i}>
          <td>{v.id}</td>
          <td>{v.empno}</td>
          <td>{v.ename}</td>
          <td><button onClick={()=>{
            deleteDoc(doc(firestore,'emp',v.id));
            alert('emp sucessfully deleted')
          }}>Delete</button></td>
          <td><button onClick={()=>{
            updateemp(v);
          }}>Update</button></td>
        </tr>
      })}
    </table>
    <form onSubmit={(e)=>{
      e.preventDefault();
      if(emp.id==='')
      {
        addDoc(collection(firestore,'emp'),emp);
        alert('added sucessfully');
      }
      else{
        updateDoc(doc(firestore,'emp',emp.id),emp);
        alert('updated sucessfully');
      }
    }}>
      <input type="number" name="empno" value={emp.empno} onChange={change} /><br/>
      <input type="text" name="ename" value={emp.ename} onChange={change} /><br/>
      {emp.id===''?<button>Add Emp</button>:<button>Update Emp</button>}
    </form>
    </>
  )
}
export default App
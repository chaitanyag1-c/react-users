import { useEffect, useState } from "react";
import GridData from "./GridData";
import axios from 'axios'


const App = () => {
const [users,setUser] = useState([])

const SetDeletedUser=(filteredArray)=>{
  console.log(filteredArray)
  setUser(filteredArray)
  }
  
useEffect( ()=>{

  const User=async()=>{
  const response=await axios.get('https://jsonplaceholder.typicode.com/users'); 
  if(response.status===200)
  { 
  setUser(response.data)
  }
  }
    User()
  },[]);



  return(
    <>
    <GridData users={users} SetDeletedUser={SetDeletedUser}/>
    </>
  )
}

export default App;
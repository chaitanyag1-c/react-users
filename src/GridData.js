import React from 'react'
import { Table, Space,Button } from 'antd';
const GridData = ({users,SetDeletedUser}) => {


const dada=[]
 users.map((user)=>{
        dada.push(user)
    })
var columnsIn = dada[0]; 
var temtempObj ={}
var kaka=[]
for(var key in columnsIn){
   // console.log(key) 
    temtempObj ={key:key,title:key,dataIndex:key}
    kaka.push(temtempObj)
  } 
var deleteObj= {
  title: 'Action',
  key: 'action',
  render: (_, record) => (
    <Space size="middle">
      <Button onClick={()=>deleteButtonClickHandler(record.id)} type="danger">Delete</Button>
    </Space>
  )
}
kaka.push(deleteObj)
// 
const deleteButtonClickHandler=(id)=>{
console.log(`Record no ${id} was clicked`)

var dada2=dada.filter((record)=>{
if(record.id !== id)
  {
  return record
  }
})
//console.log(dada2)
SetDeletedUser(dada2)
}
  return (
    <div>
        <Table  dataSource={dada} columns = {kaka}/>
    </div>
  )
}

export default GridData
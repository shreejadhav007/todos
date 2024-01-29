import axios from '../../Axios'
import React, { useContext, useEffect, useState } from 'react'
import { Button, message } from 'antd';
import { User, useAuth0 } from '@auth0/auth0-react';
import { context } from '../Context/NoteContext';

export default function Entry() {
  const [text,setText] = useState("")
  const [date,setDate] = useState("")
  const [priority,setPriority] = useState("Low Priority")
  const [messageApi, contextHolder] = message.useMessage();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const add=async()=>{
   const a = user.nickname
    const addd =  axios.post('/addNote',{text,date,priority,a}) 
    addd?messageApi.info("Success !, Your Note is Successfully Added."):messageApi.info("Failed ! Your Note is Not  Added.")
  }
  const {notes,showdata,setUser} = useContext(context)

  const shownotes = ()=>{
    isAuthenticated?setUser(user.nickname):setUser('abc12..fwfwersdaas')
    showdata()
  }
  
  

  useEffect(()=>{
    console.log(isAuthenticated);
    // isAuthenticated && setUser(user.nickname)
    shownotes()
  },[user])
  return (
    <>
{contextHolder}

            <div className="pb-2">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-row align-items-center">
                    <input
                      type="text"
                      value={text}
                      onChange={(e)=>{setText(e.target.value)}}
                      className="form-control form-control-lg w-full"
                      id="exampleFormControlInput1"
                      placeholder="Add new..."
                    /> <br />
                    
                   
                  </div>
                    <div className='mt-3 d-flex justify-content-around '>
                    <div>
                    <p className="small mb-0 me-2 text-muted">Priority</p>
              <select value={priority} onChange={(e)=>{setPriority(e.target.value)}} className="select">
                <option value="High Priority">High Priority</option>
                <option value="Medium Priority">Medium Priority</option>
                <option value="Low Priority">Low Priority</option>
              </select>
              </div>
                  <a className='p-3' href="" data-mdb-toggle="tooltip" title="Set due date">
                      <input type="date" value={date} onChange={(e)=>{setDate(e.target.value)}}  name="" id="" />
                    </a>
                    {
                      isAuthenticated ?
                      <><button onClick={add} type="button" className="btn px-4 py-1 btn-primary">Add</button><button onClick={shownotes} type="button" className="btn px-2  btn-primary">Show My Notes</button></>:
                       <button onClick={()=>{messageApi.info("Warning, Please Login First.")}} type="button" className="btn px-4 py-1 btn-primary">Add</button>                   }
                      
                      
                    </div>
                </div>
              </div>
            </div>

        


    </>
  )
}

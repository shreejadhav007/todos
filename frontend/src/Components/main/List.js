import { CheckCircleFilled, CheckCircleOutlined, CheckOutlined } from '@ant-design/icons'
import axios from '../../Axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, message } from 'antd';


export default function List(props) {
  const {id,note,date,statuss,priority} = props; 
    const [status,setStatus] = useState(statuss)
   
    const [messageApi, contextHolder] = message.useMessage();

    const deleteNote=async()=>{
      const deletenote = await axios.delete(`/deletenote/${id}`)
      console.log(id)
    
    deleteNote && messageApi.info('Task Deleted Successfully.')
    }

    
    const changestatus =async()=>{
      const changeStatus = axios.put(`/updatestatus/${id}`,{status})
      changeStatus && messageApi.info('Task Updated as Completed .')
      setStatus(!status)

    }

    

    

  return (
  
      
     
              <tbody>
       {contextHolder}
                
                      <tr className="fw-normal">
                      <th>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                          alt="avatar 1"
                          style={{ width: 50, height: "auto" }}
                        />
                      </th>
                      <td className="align-middle">
                        <span>{note}</span>
                      </td>
                      <td className="align-middle">
                        <h6 className="mb-0">
                          <span className={`badge  ${priority=="Medium Priority"?"bg-success":""} ${priority=="Low Priority"?"bg-primary":""}  ${priority=="High Priority"?"bg-danger":""}`}>{priority}</span>
                        </h6>
                      </td>
                      <td className="align-middle">
                        {date}
                      </td>
                      <td className="align-middle">
                        <a onClick={changestatus}  data-mdb-toggle="tooltip" title="Done">
                         {status?<CheckCircleFilled className='p-3'/>:<CheckOutlined  className='p-3'/>}
                        </a>
                        <a  onClick={deleteNote} data-mdb-toggle="tooltip" title="Remove">
                        <i className="fas fa-trash-alt fa-lg text-warning" />
                        </a>
                      </td>
                    </tr>
                   
                 
              
         
              </tbody>
      
  
  )
}

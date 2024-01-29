import React, { useContext, useEffect, useState } from 'react'
import Entry from './Entry'
import Filter from './Filter'
import List from './List'
import Nav from './Nav'
import axios from '../../Axios'
import { context } from '../Context/NoteContext'
import { useAuth0 } from "@auth0/auth0-react";
import { message } from 'antd'

export default function All() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [messageApi, contextHolder] = message.useMessage();

const {notes} = useContext(context)



  return (
    <div>
{contextHolder}

 <section className=" gradient-custom-2">
  <div className="container py-5 h-100">
  <Nav/>
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div
          className="card"
          id="list1"
          style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}
        >
          <div className="card-body py-4 px-4 px-md-5">
            <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
              <i className="fas fa-check-square me-1" />
              <u>My Todo-s</u>
            </p>
            <Entry/>
            <hr className="my-4" />
            <Filter/>
            <table className="table text-white mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Team Member</th>
                      <th scope="col">Task</th>
                      <th scope="col">Priority</th>
                      <th scope="col">Date</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
            {isAuthenticated &&
              notes.map((element,index)=>{
                return(
                  
                  <List key={index} id={element._id} note={element.note} date={element.date} priority={element.priority} statuss={element.status}  />
                  
                  )
                })
              }
              </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



     
    </div>
  )
}

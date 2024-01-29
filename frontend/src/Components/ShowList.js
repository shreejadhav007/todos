import React, { useState } from 'react'

export default function ShowList() {

    const [status,setStatus] = useState("<i className='fas fa-check fa-lg text-success me-3' />")

  return (
    <div>
      <section className="vh-100 gradient-custom-2">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-12 col-xl-10">
        <div className="card mask-custom">
          <div className="card-body p-4 text-white">
            <div className="text-center pt-3 pb-2">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                alt="Check"
                width={60}
              />
              <h2 className="my-4">Your Task List</h2>
            </div>
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
              <tbody>
           
                <tr className="fw-normal">
                  <th className="border-0">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                      alt="avatar 1"
                      style={{ width: 45, height: "auto" }}
                    />
                    <span className="ms-2">Ben Smith</span>
                  </th>
                  <td className="border-0 align-middle">
                    Ask for Lunch to Clients
                  </td>
                  <td className="border-0 align-middle">
                    <h6 className="mb-0">
                      <span className="badge bg-success">Low priority</span>
                    </h6>
                  </td>
                  <td className="border-0 align-middle">
                    <a onClick={()=>setStatus('<i className="fas fa-check-double fa-lg text-success me-3" />')} href="#!" data-mdb-toggle="tooltip" title="Done">
                      
                    </a>
                    <a href="#!" data-mdb-toggle="tooltip" title="Remove">
                      <i className="fas fa-trash-alt fa-lg text-warning" />
                    </a>
                  </td>
                </tr>
              </tbody>
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

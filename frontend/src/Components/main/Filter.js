import axios from '../../Axios'
import React, { useContext, useEffect, useState } from 'react'
import { context } from '../Context/NoteContext'

export default function Filter() {

  const [filters,setFilters] = useState("all")
const {setNotes} = useContext(context)

  const filter = async()=>{
    console.log(filters)
    
    const filterr = await axios.post('/filternotes',{filters})
    console.log(filterr)
    setNotes(filterr.data)
  }

  useEffect(()=>{
filter()
  },[filters])
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center mb-4 pt-2 pb-3">
              <p className="small mb-0 me-2 text-muted">Filter</p>
              <select onChange={(e)=>setFilters(e.target.value)} className="select">
                <option value="all">All</option>
                <option value="Complete">Complete</option>
                <option value="Incomplete">Incomplete</option>
              </select>
             
            
            </div>
    </div>
  )
}

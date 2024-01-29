import { createContext, useState } from "react";
import axios from "../../Axios";

export  const context = createContext();

export const AppContext = ({children})=>{

    const [alert,setAlert] = useState("")
    const [notes,setNotes] = useState([])
    const [user,setUser] = useState('')

    // const getallnotes =async()=>{
    //     const getnote = await axios.get('/showNotes')
    //     // setNotes(getnote)
    // }

    const showdata = async()=>{
        console.log(user)
        const username = user;
        const show =await axios.post('/showNotes',{username});
        setNotes(show.data)
        console.log(show)
      }

    return(
        <context.Provider value={{setNotes,showdata,notes,setUser}}>
            {children}
        </context.Provider>
    )
}

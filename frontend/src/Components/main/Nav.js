import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { context } from '../Context/NoteContext';

export default function Nav() {
  const { loginWithRedirect,logout } = useAuth0();
  const {setUser,users} = useContext(context) 
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(isAuthenticated);

  useEffect(()=>{
    isAuthenticated ? setUser(user.nickname):setUser("")
  },[user])

  return (
    <nav className="navbar bg-body-tertiary m-2">
    <div className="container-fluid">
      <a className="navbar-brand">TODO'S</a>
      <form className="d-flex" role="search">

        {isAuthenticated ?<> <button className="btn btn-outline-success m-1" type="submit" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>LogOut </button><h5 className='mt-2'>Hii ,{user.nickname}</h5></>:
           <button className="btn btn-outline-primary m-1" onClick={() => loginWithRedirect()} type="submit">Log In</button>
           
        
        }
        </form>
    </div>
  </nav>

  )
}

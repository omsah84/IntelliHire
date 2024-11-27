import { Outlet, Link } from 'react-router'
import './Home.css'
import Layout from './Layout'
import React from 'react'

export default function Home() {

  return (
    <>
 
      <div className="home" >
        <h1 style={{fontSize:'50px'}}>Welcome to Intellihire</h1> 
         <Link to = "start" className="Start"><button className="btn" > start</button></Link>
         <Outlet/>
        </div>
    </>
  )
}



import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import "./Home.css"
import Layout from './Layout'
export default function Home() {
  return (
    <>
      <div className='home'>
        <h2>Welcome to Virtual Interview Assistant</h2>

        <Link to="/Start" className='Start'><button className='btn'>Start</button></Link>

        <Outlet />
      </div>
    </>
  )
}



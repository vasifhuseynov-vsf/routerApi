import React from 'react'
import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>Home Page</h1>
        <ul>
            <li>
                <Link to='/user'>User</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default Home
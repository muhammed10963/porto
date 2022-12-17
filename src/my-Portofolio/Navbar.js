import React, { useEffect, useRef, useState } from 'react'
import {NavLink,Link} from 'react-router-dom'
import m from '../ima/mn.jpg'
import {FaUser} from 'react-icons/fa'
import './style.css'
const Navbar = () => {
    const ref1=useRef()
    const [Arraylinks,setArraylinks]=useState([])
    const add=(e)=>{
        Arraylinks.map((e)=>{
            Arraylinks.map((e)=>{e.className=''})

        })

        e.currentTarget.className='active'
    }
    useEffect(()=>{
        let arraylink=Array.from(ref1.current.children)
        setArraylinks(arraylink)
        // add()
    },[])
    return (
    <div className="container">
        <div className='Navbar'>
    
            <div className="leftNav">
                <img src={m} alt='Muhammed' 
                style={{width:'100px',
                height:'110px',borderRadius:'15px'}}/>
                <FaUser className='icon'/>
                <div className="text">
                    <h4>Muhammed</h4>
                    <p>Front-End Developer</p>
                </div>
            </div>
            <div className="RightNav">
                <div className="links" ref={ref1}>
                    <Link  to='/' className='active' onClick={(e)=>add(e)}>Home</Link>
                    <Link  to='/Projects' onClick={(e)=>add(e)}>Projects</Link>
                    <Link  to='/Footer' onClick={(e)=>add(e)}>About</Link>
                    {/* <NavLink  to='/Posts' >posts</NavLink> */}

                </div>
            </div>
        </div>
    </div>
)
}

export default Navbar
import React, { useEffect, useRef } from 'react'
import './education.css'
const Education = () => {
    const colorref=useRef()
    useEffect(()=>{colorref.current.classList.add('back')})
    return (
    <div className='education' ref={colorref}>
    
        <h3>Education</h3>
        <div className="educa">
            
            <div className="first">
                <h2>Health Technical Institute [ Pharmacy ]</h2>
                <p>Damascus | 2019 -2021</p>
                <article>
                The duration of study at this institute is two years in which the student
                studies the principles of pharmacy and the identification of the varieties
                of medicines
                </article>
            </div>
            <div className="first">
                <h2>Computer Technology Institute [ Programming ]</h2>
                <p>Damascus | present </p>
            </div>
            <div className="first">
                <h2>Courses</h2>
                <ul>
                    <li>Maximilian Schwarzmüller [ React , Next ]</li>
                    <li>Pedro Tech [ Redux ]</li>
                    <li>Elzero Web School [ Html , Css , Js ]</li>
                    <li>Hamza Nabail [ React , Redux , TypeScript ]</li>
                </ul>
            </div>
        </div>
    </div>
)
}

export default Education
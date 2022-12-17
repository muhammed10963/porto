import React, { useEffect } from 'react'
import './cv.css'
import {FaHome,FaTelegram, FaVoicemail,} from 'react-icons/fa'
// import { MdAttachEmail } from "@react-icons/all-files"
import Education from './Education'
const Footer = () => {
  useEffect(()=>{
      document.addEventListener('mousemove',(e)=>{
        let body=document.querySelector('.content .cv')
        let heart=document.createElement('span')
        heart.classList.add('myspan')
        let x=e.offsetX
        let y=e.offsetY
        heart.style.left=x+'px'
        heart.style.top=y+'px'
        let size=Math.random()*80
        heart.style.width=20+size+'px'
        heart.style.height=20+size+'px'

        let trans=Math.random()*360
        heart.style.transform='rotate('+trans+'deg)'
        if(body){
          body.appendChild(heart)
          setTimeout(()=>{
            heart.remove()
          },1000)
        }

            })
  },[])
  return (
    <div className='cv'>
      <div className="data">
      <div className="contact">
        <div className="site">
          <FaHome/>
          <h5>Damascuse</h5>
        </div>
        <div className="phone">
          <FaTelegram/>
          <h6>+963 997705524</h6>
        </div>
        <div className="email">
          <FaVoicemail/>
          <h6>muhammedsalehhosen</h6>
        </div>
      </div>
      <div className="text">
        <div className="sklls">
          <h4>Skills</h4>
          <div className="html first">
            <h4>HTML</h4>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="html css">
            <h4>Css</h4>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="html js">
            <h4>Js</h4>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="html react">
            <h4>React</h4>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="html redux">
            <h4>Redux</h4>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="html next">
            <h4>Next</h4>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="html ts">
            <h4>Ts</h4>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      </div>

      <Education/>
    </div>
  )
}

export default Footer
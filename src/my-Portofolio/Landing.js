import React, { useEffect, useRef } from 'react'
import m from '../ima/mn.jpg'
import {FaFacebookF, FaTelegram} from 'react-icons/fa'

const Landing = () => {
  const translate=useRef()
  const translatetext=useRef()
  const translatesocial=useRef()

  useEffect(()=>{

    setTimeout(()=>{translate.current.classList.add('back')},200)
    setTimeout(()=>{translatetext.current.classList.add('back')},600)
    setTimeout(()=>{translatesocial.current.classList.add('back')},900)
  },[])

  return (
    <div className='Landing'>
      <div className="my-file">
        <div className="line"></div>
        <div className="boximage" ref={translate}>
          <img src={m} alt="muhammed" />
        </div>
        <div className="text" ref={translatetext}>
          <h3>Muhammed Saleh</h3>
          <p>Jenior Front-End</p>
        </div>
        <div className="social" ref={translatesocial}>
          <FaFacebookF/>
          <a href="https://t.me/MuhammedSaleh"><FaTelegram/></a>
        </div>
      </div>
    </div>
  )
}

export default Landing
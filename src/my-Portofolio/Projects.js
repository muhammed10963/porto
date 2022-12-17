import React, { useEffect, useRef } from 'react'
import './projects.css'
import cruds from '../ima/cruds.png'
import memory from '../ima/memory-game.jpg'
import quiz from '../ima/quiz.png'
import hang from '../ima/hang.jpg'
import slide from '../ima/slider.jpg'
import ok from '../game/t.mp3';
import useSound from 'use-sound'
const Projects = () => {
  const [play] = useSound(ok,
    { volume: 0.75 });
  const firstref=useRef()
  const secondref=useRef()
  const thirdref=useRef()
  const fourthref=useRef()
  const fivethref=useRef()
  const sexithref=useRef()
  useEffect(()=>{setTimeout(()=>play(),1000)})
  useEffect(()=>{
    setTimeout(()=>{firstref.current.classList.add('back')},100)
    setTimeout(()=>{secondref.current.classList.add('back')},500)
    setTimeout(()=>{thirdref.current.classList.add('back')},800)
    setTimeout(()=>{fourthref.current.classList.add('back')},100)
    setTimeout(()=>{fivethref.current.classList.add('back')},500)
    setTimeout(()=>{sexithref.current.classList.add('back')},800)
  },[])
  return (
    <div className='projects'>
      <div className="linkspro">
      <a href="/" className='first' ref={firstref}>
        <div className="cruds">
          <img src={cruds} alt="" />
          <textarea name="" id="" cols="30" rows="10" readOnly
          value=' A project to do multiple operations such as adding a
          special account and each account can create a post and
          edit- it and delete it and search for friends used in this
          project React with typescript, react-router-dom,
          Axios and Redux library' />
        </div>
        <h4>CRUDS</h4>
      </a>
      <a href="/" className='second' ref={secondref}>
      <div className="cruds">
          <img src={quiz} alt="Cruds App" />
          <textarea name="" id="" cols="30" rows="10" readOnly
          value=' A test application that displays a set of questions to
          users with points for each correct answer by
          communicating with the API using REACT with typescript,
          Redux library, and a few CSS formats' />  
        </div>
        <h4>QUIZ APP</h4>
      </a>
      <a href="/" className='third' ref={thirdref}>
      <div className="cruds">
          <img src={memory} alt="Memory Game" />
          <textarea name="" id="" cols="30" rows="10" readOnly 
          value='the famous game Meomory game created by React with
          JS and Css format' />
      
        </div>
        <h4>MEMORY GAME</h4>
      </a>
      <a href="/" className='fourth' ref={fourthref}>
      <div className="cruds">
          <img src={hang} alt="Hang-Man game" />
          <textarea name="" id="" cols="30" rows="10" readOnly 
          value=' The famous game Hangman created using React with
          JavaScript and CSS formats' />
        </div>
        <h4>HANGEMAN</h4>
      </a>
      <a href="/" className='fiveth' ref={fivethref}>
      <div className="cruds">
          <img src={slide} alt="Slider-images" />
          <textarea name="" id="" cols="30" rows="10" readOnly
          value='An application that beautifully switches images with
          beautiful animation movements using React with
          JavaScript and CSS' />
        </div>
        <h4>SLIDER IMAGE</h4>
      </a>
      <a href="/" className='sexith' ref={sexithref}>
      <div className="cruds">
          <img src={''} alt="" />
          <textarea cols="30" rows="10" readOnly 
          value='' />
        </div>
        <h4>TEMPLATE</h4>
      </a>
      </div>
    </div>
  )
}

export default Projects
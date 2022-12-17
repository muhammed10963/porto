import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Footer from './Footer'
import NotFound from './NotFound'
import Navbar from './Navbar'
import Projects from './Projects'
import Landing from './Landing'
import Posts from './Posts'

const App = () => {

    return (
        <BrowserRouter>
            <div className='content'>
                <Navbar/>
                <Routes>
                    <Route  path="/" element={<Landing/>}/>
                    <Route  path="/Projects" element={<Projects/>}/>
                    <Route  path="/Footer"  element={<Footer/>}/>
                    <Route  path="/NotFound"  element={<NotFound/>}/>
                </Routes>
            </div>
        </BrowserRouter>
)
}

export default App
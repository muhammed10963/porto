
import React, { Children, useEffect, useRef, useState } from 'react'
import  ReactDOM  from 'react-dom'
// import datatest from './Pro_4/datatest'
// import App from './Quiz/App'
// import App from './pro3_hang/App'
// import App from './pro2_Template/App'
// import App from './Pro_4/App'
// import App from './snake/App'
// import App from './game/App'
// import App from './slider/App'
import App from './my-Portofolio/App'
// import App from './appa/App'
// import App from './FacebookWithReduxAndTs/App'
// import App from './Temp/App'
// import App from './test/App'
// {datatest.map((e,ix)=><div key={ix}>{e.name}</div>)}
// function App() {
//     const ref1=useRef()
//     const[token,settoken]=useState()
//     useEffect(()=>{
//         let elem=``
//         datatest.filter((e)=>e.name===token).map((a,ix)=>{
//             elem += `<li name=${a.email}>${a.name}</li>`
//         })
//         ref1.current.innerHTML=elem
//     },[token])
    
//     return (
//     <div>
//         <input type='text' placeholder='search' list='search' onChange={(e)=>{settoken(e.target.value)}}/>
//             <ul ref={ref1}></ul>

//         <button>send</button>
//     </div>
// )

// }

// export default App

ReactDOM.render(<App/>,document.getElementById("root"))
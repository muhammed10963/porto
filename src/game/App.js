import React, { useEffect, useRef, useState ,} from 'react'
import useSound from 'use-sound'
import ok from '../game/t.mp3';
import no from '../game/f.mp3';

function App() {
    const [play] = useSound(ok,
    { volume: 0.75 });
    const [playno] = useSound(no,
        { volume: 0.75 });
    const ref1=useRef()
    const [arr,setarr]=useState([])
    const hide=()=>{

        arr.map((e,ix)=>{
            if(arr[0].value===arr[1].value){
                e.style.opacity='1';
                e.style.background='white'
                play()
                setarr([])
                e.style.pointerEvents='none';
            }
            else{e.style.opacity='0';e.style.pointerEvents=''
            setarr([]);playno()}
        })
    }

    const back=(a)=>{
        arr.push(a.target)
        if(arr.length === 2 ){
        setTimeout(() => {

                hide()

        },1000);
    }else{
        setTimeout(()=>{a.target.style.opacity='0';a.target.style.pointerEvents='';setarr([])},1000)
    }
}
    useEffect(()=>{
        const arrayfromchild=Array.from(ref1.current.children)
        arrayfromchild.map(e=>
        e.style.order=Math.floor(Math.random()*arrayfromchild.length))
    },[])

    return (
    <div style={{display:'flex',background:'currentColor',justifyContent:'space-around',flexWrap:'wrap',width:'400px'
        ,margin:'100px auto'}} ref={ref1}>
        {[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10].map((e,ix)=>
    
                <div key={ix} style={{margin:'10px 10px',background:'yellow',width:'20%',height:'40px'}}>
                    <button onClick={(e)=>{e.target.style.opacity="1";e.target.style.pointerEvents='none'
                    e.target.style.transition='0.3s';back(e)}} value={e} 
                    style={{opacity:'0',cursor:'pointer',width:'100%',height:'100%'}}>{e}</button>
                </div>
            
        )}
    
    </div>
)
}

export default App
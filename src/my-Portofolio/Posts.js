import React from 'react'
import { Link,useParams } from 'react-router-dom'

const Posts = (props) => {
    // console.log(props)
    const param=useParams()
    console.log(param)
    console.log(props,'param')
    return (
        <div style={{textAlign:'center',background:'#fff'}}>
            <Link to='/posts/1'>post1</Link>
            <Link to='/posts/2'>post2</Link>
        </div>
)
}

export default Posts
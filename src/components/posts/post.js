import React from 'react'
import { useLocation } from 'react-router-dom'
import './posts.css'
const Post = ({ data }) => {
    const location = useLocation()
    const array = location.pathname.split("/")[2]
    const requiredPost = data.filter(ci => Number(array) === ci.id)
    return (
        <div>
            {requiredPost.map((ci,index)=>{
                return(
                    <div>
                    <img  className = "post-image" src = {ci.img} alt = {`post ${ci.id}`} />
                    <div className="description">
                        <h2 className="post-title">
                            {ci.title}
                        </h2>
                        <p className="shortdesc">
                            {ci.desc}
                        </p>
                        <p className="longDesc">
                            {ci.longDesc}
                        </p>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Post
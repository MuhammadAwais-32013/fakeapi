'use client'
import PostCard from '@/Components/PostCard/PostCard'
import React, { useEffect, useState } from 'react'

export default function Blog() {
  const[PostData, setPostData] = useState([])
   useEffect(()=>{
    getAllPost()
   },[]
 

  )
  const getAllPost =async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data =await response.json()
    setPostData(data)
  }

  return (
    <div className="flex flex-wrap justify-center">
      {PostData.map((eachPost:any)=>{
           return(
         <PostCard PostData={eachPost} /> )
           })}
      </div>

  )
}

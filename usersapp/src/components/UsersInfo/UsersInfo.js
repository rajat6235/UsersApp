import React, { useState } from 'react'
import './UsersInfo.css'
function UsersInfo({auth,img}) {
console.log(auth)
  return (
    <div className='container'>

  {    img ? <><h1 className='name'>{auth}</h1><img className='userImg' src={img} alt={auth}></img></>: ''}
    </div>
  )
}

export default UsersInfo
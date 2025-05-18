import React from 'react'

const User = ({name,course,email,children}) => {
    
  return (
    <>
    <div>name:{name}</div>
    <div>course:{course}</div>
    <div>email:{email}</div>
    {children}
    </>
  )
  
}

export default User

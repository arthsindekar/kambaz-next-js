import React, { ReactNode } from 'react'

export default function Square({children}: {children: ReactNode}) {
    const num = Number(children)
  return (
    <span id ="wd-square"><h4>Square</h4>{num * num} <hr /></span>
    
  )
}

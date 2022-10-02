import React from 'react'
import  styled  from 'styled-components';
import './Nav.css'
export const Span=styled.span`
color:#FCC647;
`
export default function Logo() {
  return (
    <div className='logo'>
        Tammy <Span>Food</Span>
    </div>
  )
}

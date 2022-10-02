import React from 'react'
import {nav} from '../../data/Data'
import './Nav.css'
import  styled from 'styled-components';
const List=styled.li`
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 27px;
color:black;
list-style:none;
margin-left:70px;
cursor:pointer;
display:inline-block;
&:hover{
    color:#FCC647;
    transition:0.3s;
    border-bottom:3px solid #FCC647;
}
`
export default function Lists() {
  return (
    <div className=''>
          <ul className='list-items'>
        {nav.map((item,id)=>(
                <List key={id}>{item.nav}</List>
        ))}
            </ul>

    </div>
  )
}   
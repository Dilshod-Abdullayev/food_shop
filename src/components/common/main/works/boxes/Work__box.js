import React, { Component } from 'react';
import {work_box} from '../../../../data/Data'
import './work.css'
import { FileTextOutlined, CarOutlined, DollarCircleOutlined } from '@ant-design/icons';
import  styled  from 'styled-components';


const H1=styled.h1`
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 32px;
color: #3C3C3C;
text-align:center;
`
const P=styled.p`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 27px;
text-align: center;
color: #667085;
`

class Work__box extends Component {
    render() {
        return (
            <div className='boxs'>
                { 
                    work_box.map((item,index)=>(
                        <div className='box'  key={index}>
                          <div style={{background:`${item.color}`}} onClick={()=>
                            
                            (console.log(item.color))} className='box-top'>
                               
                          </div>
                          <H1>{item.title}</H1>
                          <P>{item.text}</P>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Work__box;
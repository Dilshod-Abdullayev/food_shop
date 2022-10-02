import React, { Component } from 'react';
import { Rate } from 'antd';
import { ShoppingCartOutlined, ShareAltOutlined } from '@ant-design/icons';
import styled  from 'styled-components';
import {card} from '../../../data/Data'
import './food.css'
const H2=styled.h2`
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 21px;
color: #3C3C3C;
padding-top:5px
`
const H1=styled.h1`
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
color: #3C3C3C;
`
const P=styled.p`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 20px;
color: #667085;
`
class Cards extends Component {
    render() {
        return (
            <div className='cards'>
            {
                card.map((item,index)=>
                    <div className='card' key={index}>
                    <img src={item.src}/>
                    <Rate style={{background:'black',width:'150px'}} allowHalf defaultValue={2.5} />
                    <H1>{item.title}</H1>
                    <P>{item.text}</P>
                    <div>
                        <H2>{item.money}</H2>                       
                        <div><ShoppingCartOutlined style={{background:'#F24D21',fontSize:'20px',color:'white',borderRadius:'5px',padding:'5px'}} />
                        <ShareAltOutlined style={{background:'#3C3C3C',fontSize:'20px',color:'white',borderRadius:'5px',padding:'5px',marginLeft:'15px'}}  /></div>
                    </div>
                </div>
                )
            }
            </div>
        );
    }
}

export default Cards;
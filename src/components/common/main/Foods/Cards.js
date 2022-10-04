import React, { Component } from 'react';
import { Rate } from 'antd';
import { ShoppingCartOutlined, ShareAltOutlined } from '@ant-design/icons';
import styled  from 'styled-components';
import {card} from '../../../data/Data'
import { Image } from 'antd';
import './food.css'
import Nav from '../../Navbar/Nav'
import { Routes,Route,Link } from 'react-router-dom';
import Card__info from './Card__info';
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
            <div>
                        <div className='cards'>
            {
                card.map((item,index)=>
                    <div className='card' key={index}>
                    <Image  width={'100%'} src={item.src} />
                    <Rate style={{background:'black',width:'150px'}} allowHalf defaultValue={1.5} />
                    <H1>{item.title}</H1>
                    <P>{item.text}</P>
                    <div>
                        <H2>{item.money}</H2>                       
                        <div><ShoppingCartOutlined style={{background:'#F24D21',fontSize:'20px',color:'white',borderRadius:'5px',padding:'5px'}} />
                        <ShareAltOutlined  style={{background:'#3C3C3C',fontSize:'20px',color:'white',borderRadius:'5px',padding:'5px',marginLeft:'15px' }}  />
                        </div>
                    </div>
                </div>
                )
            }
            </div>
            </div>
        );
    }
}

export default Cards;
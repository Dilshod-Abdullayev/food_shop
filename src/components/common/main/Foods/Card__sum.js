import React, { Component } from 'react';
import Card__sms from './Card__sms';
import  styled  from 'styled-components';
import { Span } from '../../Navbar/Logo';
const H1=styled.h1`
font-size:30px;
transition:'1s';
`
class Card__sum extends Component {
    render() {
        if(this.props.sum==10){
            <Card__sms/>
        }
        return (
            <div>
                <H1>{this.props.sum>0 ? this.props.sum*1000 +"atigi shunca pul" :   <Span style={{transition:'1s'}}>Hali sizda buyurtma soni yoq</Span>}</H1>
            </div>
        );
    }
}

export default Card__sum;
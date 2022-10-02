import React, { Component } from 'react';
import  styled  from 'styled-components';
export const Heading=styled.h1`
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 48px;
color: #3C3C3C;
text-align:center;
`
export const Text=styled.p`
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 37px;
text-align: center;
color: #667085;
`
class Work__top extends Component {
    render() {
        return (
            <div className='work-top'>
                 <Heading>How it works</Heading>
                 <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/> Lorem Ipsum has been the industry</Text>
            </div>
        );
    }
}

export default Work__top;
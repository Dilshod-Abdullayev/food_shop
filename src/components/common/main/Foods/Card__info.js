import React, { Component } from 'react';
import './food.css'
import { Span } from './../../Navbar/Logo';
import Card__num from './Card__num';
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
class Card__info extends Component {
    render() {
        return (
            <section className='info'>
                <div className="info__top">
                    <h1 className='product-name'>Lorem, ipsum dolor color lorem ups.</h1>
                </div>
                    <div className="product-info">
                        <img width={'30%'} src={"https://i.pinimg.com/originals/ff/c3/d3/ffc3d3f7e25c28ea2d3fe42231736f00.png"}/>
                         <div>
                            <h2>Ushbu mahsulotimiz haqida <Span>qisqacha malumotlar</Span> </h2>
                            <hr />
                            <h3>Narxi <span>9000 <sub>uzs</sub></span> </h3>
                            <hr />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse fugit nemo dolor hic ab exercitationem eius facilis earum vero distinctio.</p>
                              <Card__num/>
                              <Button  type="primary" icon={<ShoppingCartOutlined />}>   Download</Button>
                         </div>
                    </div>

            </section>
            
        );
    }
}

export default Card__info;
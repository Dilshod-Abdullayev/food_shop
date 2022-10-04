import React, { Component } from 'react';
import './food.css'
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Card__sum from './Card__sum';
import card__sms from './Card__sms';
// let num=0
class Card__num extends Component {
    state={
        count:0,
        alert: false
    }
 
    inrc=()=>{
     this.setState({
        count:this.state.count+1
     })
    }
    decr = ()=>{
        if(this.state.count > 0) {
            this.setState({count:this.state.count - 1})
        } else{
            card__sms()
        }
    }
    render() {
        return (
            <section className='card__num'>
                <div style={{height:'60px'}} className='buttons-group'>
                  <Button onClick={this.inrc} type="orange" shape="round" icon={<DownloadOutlined />} >Kamaytirish</Button>
                    <h1>{this.state.count}</h1>
                    <Button onClick={this.decr}
                     type="orange" shape="round" icon={<DownloadOutlined />} >oshirish</Button>
                <br/>
                </div>   
                <Card__sum sum={this.state.count}/>
                </section>      
        );
    }
}

export default Card__num;
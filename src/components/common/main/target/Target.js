import React, { Component } from 'react';
import Targer__left from './Targer__left';
import Targer__right from './Target__right/Targer__right';
import './target.css'
class Target extends Component {
    render() {
        return (
            <div className='target'>
                <Targer__left/>
                <Targer__right/>
            </div>
        );
    }
}

export default Target;
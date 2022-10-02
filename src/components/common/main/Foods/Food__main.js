import React, { Component } from 'react';
import Food__top from './Food__top';
import './food.css'
import Cards from './Cards';
class Food__main extends Component {
    render() {
        return (
            <div className='food'>
                <Food__top/>
                <Cards/>
            </div>
        );
    }
}

export default Food__main;
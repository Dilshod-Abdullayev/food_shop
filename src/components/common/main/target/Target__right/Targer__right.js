import React, { Component } from 'react';
import Target__btn from "./Target__btn";
import Target__info from "./Target__info";
import Target__order from "./Target__order";

class Targer__right extends Component {
    render() {
        return (
            <div  style={{width:'50%',paddingTop:'100px'}}>
                <Target__btn/>
                <Target__info/>
                <Target__order/>
            </div>
        );
    }
}

export default Targer__right;
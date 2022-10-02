import React, { Component } from 'react';
import Work__box from './boxes/Work__box';
import Work__top from './Work__top';

class Work__main extends Component {
    render() {
        return (
            <div>
                <Work__top/>
                <Work__box/>
            </div>
        );
    }
}

export default Work__main;
import React, {Component} from 'react';
import Download__left from "./Download__left/Download__left";
import Download__right from "./Download__right/Download__right";
import './download.css'
class Download extends Component {
    render() {
        return (
            <div className="downloads">
                <Download__left/>
                <Download__right/>
            </div>
        );
    }
}

export default Download;
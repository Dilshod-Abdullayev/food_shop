import React, {Component} from 'react';
import Download__top from "./Download__top";
import Download__btns from "./Download__btns";
import  '../download.css'
class DownloadLeft extends Component {
    render() {
        return (
            <div className="left">
                <Download__top/>
                <Download__btns/>
            </div>
        );
    }
}

export default DownloadLeft;
import React, {Component} from 'react';
import {Button} from 'antd'
import '../download.css'
class DownloadBtns extends Component {
    render() {
        return (
            <div className="btns">
             <Button type="primary">Download App_store</Button>
                <Button style={{marginLeft:'30px'}} type="primary">Download Play Market</Button>
            </div>
        );
    }
}

export default DownloadBtns;
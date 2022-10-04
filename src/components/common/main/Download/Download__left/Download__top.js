import React, {Component} from 'react';
import { Typography } from 'antd';
const {Title, Text}= Typography
class DownloadTop extends Component {
    render() {
        return (
            <div>
              <Title>To Get 15% Discount <br/> Download The App</Title>
                <Text type="secondary">Lorem Ipsum is simply dummy text of the printing and typesetting <br/>
                    industry. Lorem Ipsum has been the industry's standard dummy <br/> text ever since the 1500s.</Text>
            </div>
        );
    }
}

export default DownloadTop;
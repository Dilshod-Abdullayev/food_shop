import React, {Component} from 'react';
import { Typography } from 'antd';
import '../target.css'
const { Title,Text } = Typography;

class TargetInfo extends Component {
    render() {
        return (
            <div className="target__info">
           <Title level={2}>We Earn Your Trust and are <br/> Diligent in Your Case</Title>
                <Text type={"secondary"}>When an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap
                    into electronic typesetting,</Text>
   <br/>
                <br/>
                <br/>
                <br/>
                   <Text  type={"secondary"}> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            </div>
        );
    }
}

export default TargetInfo;
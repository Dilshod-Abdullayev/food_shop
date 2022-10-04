import React, {Component} from 'react';
import styled  from 'styled-components';
const  Button=styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 12px;
  color: white;
  background: #FCC647;
  border: none;
  margin-top: 100px;
  border-radius: 6px;
  padding: 15px 25px;

  &:hover {
    background: #5c4e2c;
    transition: 0.5s ease-in-out;
  }
`
class TargetOrder extends Component {
    render() {
        return (
            <Button>
                Order Now
            </Button>
        );
    }
}

export default TargetOrder;
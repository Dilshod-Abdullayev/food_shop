import { message } from 'antd';
import React from 'react';

const card__sms = () => {
  message.success({
    content: 'Iltimos to`g`ri son yozing',
    className: 'custom-class',
    style: {
      marginTop: '20vh',
    },
  });
};
export default card__sms;
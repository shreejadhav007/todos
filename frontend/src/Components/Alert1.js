import { Button, message } from 'antd';
import React, { useEffect } from 'react'

export default function Alert1() {
  
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.info('Hello, Ant Design!');
  };
  return (
    <div className='fixed z-50'>
       {contextHolder}
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
    </div>
  )
}

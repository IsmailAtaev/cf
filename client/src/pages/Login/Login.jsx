// src/pages/Login/Login.jsx
import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
// import './Login.css'; // Custom styles here

const { Title } = Typography;

const Login = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setVisible(true);
  }, []);

  const onFinish = ({ username, password }) => {
    if (username === 'admin' && password === '1234') {
      message.success('Welcome back!');
      navigate('/dashboard');
    } else {
      message.error('Invalid credentials');
    }
  };

  return (
    <div className={`login-wrapper ${visible ? 'fade-in' : ''}`}>
      <div className="login-card-glass">
        <Title level={2} className="login-title">Sign In</Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Enter your username' }]}
          >
            <Input size="large" prefix={<UserOutlined style={{ color: 'black' }}/>} placeholder="admin" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Enter your password' }]}
          >
            <Input.Password size="large" prefix={<LockOutlined style={{ color: 'black' }}/>} placeholder="••••••••" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large" className="login-button">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
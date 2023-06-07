import React from 'react';
import { Button, Input, Form } from 'antd';
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="w-full max-w-md">
        <Form name="login-form" className="bg-white rounded-lg shadow-lg px-8 py-10" onFinish={onSubmit}>
          <h2 className="text-3xl text-center mb-6 text-blue-800">FluentFun Login</h2>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input name="email" prefix={<UserOutlined className="text-blue-500" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password
              name="password"
              prefix={<LockOutlined className="text-blue-500" />}
              placeholder="Password"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              style={{ backgroundColor: '#1890ff' }}
            >
              Sign In
            </Button>
          </Form.Item>
          <div className="text-center">
            <Link to="/register" className="block text-blue-500 hover:text-blue-800">
              Create an account
            </Link>
          </div>
          <div className="text-center">
            <p className="text-gray-600">Or sign in with:</p>
             <FcGoogle className='mx-40 mt-10 text-5xl'/>
            <div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;

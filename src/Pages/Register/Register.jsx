import React from 'react';
import { Button, Input, Form } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, GoogleOutlined } from '@ant-design/icons';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  const { handleSubmit, register, errors, getValues } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleGoogleLogin = () => {
    // Perform Google login logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="w-full max-w-md">
        <Form name="register-form" className="bg-white rounded-lg shadow-lg px-8 py-10" onFinish={onSubmit}>
          <h2 className="text-3xl text-center mb-6 text-blue-800">Register</h2>
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="photoUrl"
            rules={[{ required: true, message: 'Please enter your photo URL' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Photo URL" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Please enter your password' },
              {
                min: 6,
                message: 'Password must be at least 6 characters',
              },
              {
                pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).*$/,
                message: 'Password must contain at least one uppercase letter, lowercase letter, number, and special character',
              },
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Please confirm your password' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Passwords do not match'));
                },
              }),
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full" style={{ backgroundColor: '#1890ff' }}>
              Register
            </Button>
          </Form.Item>
          <div className="text-center flex flex-col items-center justify-center gap-1">
            <p className="text-gray-600">Or sign in with:</p>
             <FcGoogle className='text-5xl'/>
            </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;


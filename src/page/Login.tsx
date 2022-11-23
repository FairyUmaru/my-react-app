/*
 * @FilePath: /my-app/src/page/Login.tsx
 * @Descripttion:
 * @Author: Umaru
 * @Date: 2022-11-17 14:37:20
 * @LastEditors: Umaru
 * @LastEditTime: 2022-11-24 00:13:45
 */
import React from 'react'
import { Form, Input, Checkbox, Button } from 'antd'
import './Login.css'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const onFinish = (values: any) => {
    console.log('Success:', values)
    navigate('/index')
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="loginContainer">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>记住账号密码</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default Login

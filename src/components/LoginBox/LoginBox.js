import React from 'react';
import { Card, Button, Checkbox, Form, Input } from 'antd';
import {  toast } from 'react-toastify';
import './LoginBox.css'
const LoginBox = () => {

    const onFinish = async (values) => {
    
        try {
            const res = await fetch("https://reqres.in/api/login", {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(values)
            })
            const response = await res.json();
            if(response.token){
                toast.success("Logged in Successfully")
            }else{
                toast.error(response.error)
            }

        }
        catch (err) {
            console.log(err);
        }
        
        

    };
    return (
        <div>
            <Card className="login-card" bordered={false}>
                <h1 className="title text-center">Welcome back</h1>
                <p className="text-center">Subtitle text goes here</p>

                <Form
                    name="normal_login"
                    className="login-form"
                    onFinish={onFinish}

                >
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input Email Address!' }]}
                    >
                        <Input placeholder="Email Address" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input

                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>


                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button btn btn-primary">
                            Log in
                        </Button>

                    </Form.Item>

                    <Form.Item>
                        <div className="flex justify-between">
                            <div name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </div>

                            <a className="login-form-forgot" href="/">
                                Forgot password
                            </a>
                        </div>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default LoginBox;
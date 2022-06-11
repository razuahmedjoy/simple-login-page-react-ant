import React from 'react';
import { Col, Row } from 'antd';
import './Main.css'
import LoginBox from '../LoginBox/LoginBox';
const Main = () => {
    return (
        <div>
            <Row>
                <Col className="login" xs={24} sm={24} md={11}>
                   <LoginBox />
                </Col>
                <Col className="home-banner" md={13}>
                    
                </Col>
            </Row>
        </div>
    );
};

export default Main;
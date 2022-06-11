import React from 'react';
import './Header.css'
import { Col, Row, Button } from 'antd';
const Header = () => {
    return (
        <>
            <Row>
                <Col className="header shadow-bottom" span={24}>
                    <Row justify="space-between">
                        <Col span={4}>
                            <h2 className="brand">A.Tools</h2>
                        </Col>

                        <Col className="nav-right">

                            <div className="flex flex-gap">
                                <Button className="btn btn-primary">Start Free Trial</Button>
                                <Button className="btn btn-secondary">Login</Button>

                            </div>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default Header;
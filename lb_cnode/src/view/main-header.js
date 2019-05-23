import React, {Component} from 'react'
import {Layout, Row, Col, Divider, Menu, Icon, Dropdown, Button} from 'antd'
import Nav from './nav'
export default class MainHeader extends Component {
    render() {
        return (
            <Layout.Header>
                <Row className="wrap">
                    <Col md={6} xs={24}>
                        <h1 id="logo">cNode</h1>
                    </Col>
                    <Col md={18} xs={0}>
                        <Divider className="headerDivider" type="vertical"/>
                        <Nav id="nav" mode="horizontal"/>
                    </Col>
                    <Col className="xsNav" md={0} xs={24}>
                        <Dropdown overlay={
                            <Nav mode="vertical" id="xsNav" />
                        }
                            placement="bottomRight"
                            trigger={["click","touchend"]}
                        >
                            <Button><Icon type="bars"></Icon></Button>
                        </Dropdown>
                    </Col>
                </Row>
            </Layout.Header>
        )
    }
}
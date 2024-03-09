import React from 'react'
import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import BackGround from './BackGround'

const AuthLayout = () => {
  return (
    // <Row>
    //   <Col span={14}>
    //     <h1>Background Image</h1>
    //   </Col>
    //   <Col span={8}>
    //     <Outlet />
    //   </Col>
    // </Row>
    <Layout>
      <Content>
        <BackGround />
      </Content>
    </Layout>
  )
}

export default AuthLayout

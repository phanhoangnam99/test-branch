import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

import Header from 'src/components/Header'
// import Footer from "components/footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Layout.Content className='bg-white'>
        {/* Nơi chứa component được định nghĩa trong router */}

        {/* component Outlet sẽ là nơi render ra các children route  */}
        {children}
      </Layout.Content>

      {/* <Layout.Footer>
        <Footer/>
      </Layout.Footer> */}
    </Layout>
  )
}

export default MainLayout

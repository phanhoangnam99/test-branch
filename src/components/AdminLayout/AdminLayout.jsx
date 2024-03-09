import { FileOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Layout, Menu, notification, Popover } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import './style.css'
import { logout } from '../../modules/Authentication/slices/authSlice'

const { Header, Sider } = Layout

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label
  }
}

const items = [
  getItem('Quản lý người dùng', 'user', <UserOutlined />),
  getItem('Quản lý phim', '', <FileOutlined />, [
    getItem('Danh sách phim', 'movies', <FileOutlined />),
    getItem('Thêm phim', 'addMovie', <FileOutlined />)
  ])
]

const AdminLayout = () => {
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)
  const [current, setCurrent] = useState(location.pathname)
  const { user } = useSelector((state) => state.auth)

  const navigate = useNavigate()

  const dispatch = useDispatch()
  useEffect(() => {
    if (current !== location.pathname) {
      setCurrent(location.pathname)
    }
  }, [location, current])

  if (!user) {
    return <Navigate to='/login' />
  } else if (user?.maLoaiNguoiDung != 'QuanTri') {
    notification.error({
      message: 'Bạn không phải là quản trị viên'
    })
    return <Navigate to='/' />
  }

  return (
    <>
      <Layout>
        <Sider
          style={{ minHeight: '100vh' }}
          breakpoint='lg'
          collapsedWidth='0'
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className='logo' />
          <Menu
            theme='dark'
            defaultSelectedKeys={['1']}
            mode='inline'
            selectedKeys={current.substring(current.lastIndexOf('/') + 1)}
            items={items}
            onClick={({ key }) => {
              navigate(key)
              setCurrent(key)
            }}
          />
        </Sider>

        <Layout className='site-layout'>
          <Header className='site-layout-background' style={{ padding: 0 }}>
            <div className='d-flex justify-content-end h-100'>
              <Avatar style={{ backgroundColor: '#87d068', margin: 'auto 20px' }} icon={<UserOutlined />} />

              <Popover
                content={
                  <>
                    <a
                      href='/'
                      id='logout'
                      type='primary'
                      onClick={async () => {
                        await dispatch(logout()).unwrap()
                      }}
                    >
                      Đăng xuất
                    </a>
                    <br />
                    <a
                      href='/'
                      id='toHome'
                      type='primary'
                      onClick={async () => {
                        navigate('/')
                      }}
                    >
                      Về trang khách hàng
                    </a>
                  </>
                }
              >
                <h3 style={{ margin: 'auto 0 ', color: '#fff' }}>{user.taiKhoan}</h3>
              </Popover>
            </div>
          </Header>
          <Outlet />
        </Layout>
      </Layout>
    </>
  )
}

export default AdminLayout

import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import MainLayout from 'src/components/MainLayout'
import AuthLayout from 'src/components/AuthLayout'
import CheckoutRoute from 'src/routes/CheckoutRoute'
import CreateShowTime from 'src/modules/AdminMovie/pages/CreateShowTime'
import AdminLayout from 'src/components/AdminLayout'
import Success from 'src/modules/Ticket/Success'
import FilmDetail from 'src/modules/Home/components/FilmDetail'
import Purchase from 'src/modules/Home/components/Purchase'
import Login from 'src/modules/Authentication/pages/Login'
import useRouteElements from 'src/useRouteElements'
const User = lazy(() => import('src/modules/AdminMovie/pages/User'))

// Không import trực tiếp các pages, vì nó sẽ được tải tất cả ở lần đầu tiên
// import Home from "modules/Home/pages/Home";
// import Movie from "modules/Movie/pages/Movie";
// import Login from "modules/Authentication/pages/Login";
// import Register from "modules/Authentication/pages/Register";

// Để chỉ cần tải những pages cần thiết ta sử dụng kĩ thuật lazyload
const Home = lazy(() => import('src/modules/Home/pages/Home'))
const Movie = lazy(() => import('src/modules/Movie/pages/Movie'))
// const Login = lazy(() => import('src/modules/Authentication/pages/Login'))
const Register = lazy(() => import('src/modules/Authentication/pages/Register'))

const MovieList = lazy(() => import('src/modules/AdminMovie/pages/MovieList'))
const AddMovie = lazy(() => import('src/modules/AdminMovie/pages/AddMovie'))

function App() {
  const routeElements = useRouteElements()

  return { routeElements }

  // Suspense: hiển thị fallback UI (Loading) khi các file JS của một page đang được tải về
  // <Suspense fallback={<h1>Loading...</h1>}>
  //   <Routes>
  //     <Route
  //       path='/admin'
  //       element={
  //         <AdminLayout />
  //         // TODO: chuyển vào component AdminLayout    (X)
  //         // TODO: tạo AdminRoute kiểm tra xem user có phải là QuanTri hay không
  //         // <AdminRoute>
  //         //   <AdminLayout />
  //         // </AdminRoute>

  //         // <div>
  //         //   <h1>Admin Layout</h1>
  //         //   <Outlet />
  //         // </div>
  //       }
  //     >
  //       <Route path='user' element={<User />} />
  //       <Route path='movies' element={<MovieList />} />
  //       <Route path='showtime/:movieId' element={<CreateShowTime />} />
  //       <Route path='addmovie' element={<AddMovie />} />

  //       {/* AdminUser, AdminShowtimes */}
  //     </Route>

  //     {/* Để các routes có cùng chung 1 layout, ta sử dụng kĩ thuật nested route, route parent đi định nghĩa layout component, bên trong route parent sẽ gọi tới cái children routes */}
  //     <Route path='/' element={<MainLayout />}>
  //       {/* index: path của child route khớp 100% với path của parent route */}
  //       <Route index element={<Home />} />
  //       <Route path='movie/:movieId' element={<Movie />} />
  //       <Route path='dat-ve/:filmId' element={<FilmDetail />} />
  //       <Route path='purchase/:scheduleId' element={<Purchase />} />
  //       <Route
  //         path='checkout/:checkoutId'
  //         element={
  //           <CheckoutRoute>
  //             {/* <Checkout /> */}
  //             <h1>Checkout Component</h1>
  //           </CheckoutRoute>
  //         }
  //       />
  //       <Route path='ticket/success' element={<Success />} />
  //       <Route path='login' element={<Login />} />
  //       <Route path='register' element={<Register />} />
  //     </Route>
  //   </Routes>
  // </Suspense>
}

export default App

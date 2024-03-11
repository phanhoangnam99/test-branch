import React, { lazy, Suspense } from 'react'
import { Routes, Route, useRoutes } from 'react-router-dom'

import MainLayout from 'src/components/MainLayout'
import AuthLayout from 'src/components/AuthLayout'
import CheckoutRoute from 'src/routes/CheckoutRoute'
import CreateShowTime from 'src/modules/AdminMovie/pages/CreateShowTime'
import AdminLayout from 'src/components/AdminLayout'
import Success from 'src/modules/Ticket/Success'
import FilmDetail from 'src/modules/Home/components/FilmDetail'
import Purchase from 'src/modules/Home/components/Purchase'
import Login from 'src/modules/Authentication/pages/Login'
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

function ProtectedRoute() {
  const { user } = useSelector((state) => state.auth)
  return user ? <Outlet /> : <Navigate to='/login' />
}

function AdminRoute() {
  const { user } = useSelector((state) => state.auth)
  return user.role === 'QuanTri' ? <Outlet /> : <Navigate to='/' />
}

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '',
      element: <AdminRoute />,

      children: [
        {
          path: 'admin',
          element: <AdminLayout />,
          children: [
            { path: 'user', element: <User /> },
            { path: 'movies', element: <MovieList /> },
            { path: 'showtime/:movieId', element: <CreateShowTime /> },
            { path: 'addmovie', element: <AddMovie /> }
          ]
        },
        {
          path: '',
          element: <MainLayout />,
          children: [
            { path: '	', element: <Home /> },
            { path: 'dat-ve/:filmId', element: <FilmDetail /> },
            { path: 'login', element: <Login /> }
          ]
        }
      ]
    }
  ])
return routeElements
}

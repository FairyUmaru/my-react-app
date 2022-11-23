/*
 * @FilePath: /my-app/src/component/PrivateRoute.tsx
 * @Descripttion:
 * @Author: Umaru
 * @Date: 2022-11-23 15:19:39
 * @LastEditors: Umaru
 * @LastEditTime: 2022-11-23 22:58:59
 */
// 用于创建路由（可以根据数据，生成动态路由）
import React from 'react'
import { useRoutes } from 'react-router-dom'
import Login from '../page/Login'
import Home from '../page/Home'

const PrivateRoute = () =>
  useRoutes([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/index',
      element: <Home />,
    },
    // {
    //   path: '/',
    //   element: <Dashboard />,
    //   children: [
    //     {
    //       path: 'messages',
    //       element: <DashboardMessages />,
    //     },
    //     { path: 'tasks', element: <DashboardTasks /> },
    //   ],
    // },
  ])
export default PrivateRoute

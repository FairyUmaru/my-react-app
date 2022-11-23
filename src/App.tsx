/*
 * @FilePath: /my-app/src/App.tsx
 * @Descripttion:
 * @Author: Umaru
 * @Date: 2022-11-05 01:29:15
 * @LastEditors: Umaru
 * @LastEditTime: 2022-11-23 23:31:42
 */
import React from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import PrivateRoute from './component/PrivateRoute'

function App() {
  return (
    <Router>
      <PrivateRoute />
    </Router>
  )
}

export default App

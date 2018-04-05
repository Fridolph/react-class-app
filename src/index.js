import React from 'react'
import ReactDOM from 'react-dom'
// import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import './assets/common/reset.scss'
// const store = {}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
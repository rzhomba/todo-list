import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'
import axios from 'axios'
import config from '../config.json'

axios.defaults.baseURL = config.apiUrl
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
)

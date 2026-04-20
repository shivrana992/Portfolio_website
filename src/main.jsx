import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const appElement = <App />

ReactDOM.createRoot(document.getElementById('root')).render(
  import.meta.env.DEV ? appElement : <React.StrictMode>{appElement}</React.StrictMode>
)

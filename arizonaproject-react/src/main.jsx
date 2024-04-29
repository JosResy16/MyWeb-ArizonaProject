import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Nav from './Nav.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Nav/>
        <App name="Jos� Luis Reyes" experticeField="Desarrollo web full-stack" text="Aqu� va un texto peque�o, no mayor a 100 palabras pero que aporte algo de valor. no mayor a 100 palabras pero que aporte algo de valor." />
  </React.StrictMode>
)

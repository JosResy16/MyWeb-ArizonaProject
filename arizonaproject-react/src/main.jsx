import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Nav from './Nav.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Nav/>
        <App name="José Luis Reyes" experticeField="Desarrollo web full-stack" text="Aquí va un texto pequeño, no mayor a 100 palabras pero que aporte algo de valor. no mayor a 100 palabras pero que aporte algo de valor." />
  </React.StrictMode>
)

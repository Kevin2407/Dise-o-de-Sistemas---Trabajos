import React from 'react'
import ReactDOM from 'react-dom/client'
import Vista from './Vista.jsx'
import './styles/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <div className='bg-white w-1/2 mx-auto mt-28 rounded-xl p-12'> */}
      <Vista/>
  </React.StrictMode>,
)

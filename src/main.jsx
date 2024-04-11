import React from 'react'
import ReactDOM from 'react-dom/client'
import Vista from './Vista.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <div className='bg-white w-1/2 mx-auto mt-28 rounded-xl p-12'> */}
    <div className='bg-white w-3/4 sm:w-1/2 container mx-auto mt-28 rounded-xl p-8'>
      <Vista/>
    </div>
  </React.StrictMode>,
)

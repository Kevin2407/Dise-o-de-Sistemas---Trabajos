import React from 'react'
import ReactDOM from 'react-dom/client'
import Vista from './Vista.jsx'
import './styles/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-[#242424] m-0 flex flex-col min-h-[100vh] min-w-[320px]'>
      <Vista/>
    </div>
  </React.StrictMode>,
)

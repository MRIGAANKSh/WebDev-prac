import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'


//provider se wrap krdo puri prohject ko jo ki store hai provider jiske andr sab kuch hai 
createRoot(document.getElementById('root')).render(
  

   
    <StrictMode>
 <Provider store={store}>

    <App />

     </Provider>
  </StrictMode>
  
 
  
)

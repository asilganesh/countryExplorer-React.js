import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux/store.js'

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  once: true,
});

createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>
    <App />
    </Provider>

)

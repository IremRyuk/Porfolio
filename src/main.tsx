import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import { AllReducer } from './Redux/AllReducer.tsx'
import { legacy_createStore } from 'redux'
let store = legacy_createStore(AllReducer)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)

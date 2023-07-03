import React from 'react'
import ReactDOM from 'react-dom/client'
//Esta historia no permite API de datos, estudiar el createBrowserRouter (el curso lo hace con este)
import { BrowserRouter } from "react-router-dom";

// import { PruebaFetch } from './00-pruebas mias/PruebaFetch';

// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memo/Memorize'
// import { MemoHook } from './06-memo/MemoHook'
// import { CallbackHook } from './06-memo/callbackhook'
// import { Padre } from './07-tarea-memo/Padre'
// import'./08-useReducer/intro-reducer';
// import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';

import './index.css'

//ESTUDIAR EL createBrowserRouter************************

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    < MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
)

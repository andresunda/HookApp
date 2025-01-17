import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import CounterWithCustomHook from './01-useState/CounterWithCustomHook';
import SimpleForm from './02-useEffect/SimpleForm';
import FormWithCustomHook from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
import { FocusScreens } from './04-useRef/FocusScreens';
import { Memorize } from './06-memos/Memorize';
import { MemoHook } from './06-memos/MemoHook';
import { CallBackHook } from './06-memos/CallBackHook';
import { Padre } from './07-tarea-memo/Padre';
//import CounterApp from './01-useState/CounterApp';
//import HooksApp from './HooksApp';
import './08-useReducer/intro-reducer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   // <React.StrictMode>
   // <FormWithCustomHook />
   //<MultipleCustomHooks />
   //<FocusScreens />
   //<Padre />
   // </React.StrictMode>
);


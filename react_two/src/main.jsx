import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'

function MyWorld(){
    return(<>
        <h1>Unuching Marma</h1>
    <ul>
        <li>Mrachingnu Marma</li>
        <li>Chengchengnu Marma</li>
    </ul>
        </>
);
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <h1>Hello React</h1>
        <MyWorld/>
    </StrictMode>,
)


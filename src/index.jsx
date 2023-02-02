import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/style.css";
import App from './App';
import { CursorProvider } from "./hooks/CursorContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CursorProvider>
        <App />
    </CursorProvider>
);


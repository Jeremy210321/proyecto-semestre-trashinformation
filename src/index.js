import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './Form';
import './styleForm.css'

ReactDOM.render(
    <React.StrictMode>
        <div className="contenedor">
            <Form />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);


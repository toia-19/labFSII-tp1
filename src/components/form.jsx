import React from "react";
import './components.css';

// Formulario
import { FormControl } from '@mui/base/FormControl';

export default function Form() {

    return (
        <>
            <FormControl className="formulario">
                <h2>Formulario</h2>
                
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" />

                <label htmlFor="apellido">Apellido:</label>
                <input type="text" />

                <label htmlFor="email">Email:</label>
                <input type="text" />

                <label htmlFor="contrasena">Contraseña:</label>
                <input type="text" />

                <button>Submit</button>
            </FormControl>
        </>
    )
}
import React from "react";
import './pages.css';

// Componentes para el Santo Grial
import Principal from './principal';
import Aside from '../components/aside';

export default function Grid() {
    return (
        <>
            <div className="container">
                <Principal />
                <Aside />
            </div>
        </>
    )
}
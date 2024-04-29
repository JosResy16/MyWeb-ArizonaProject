import { useEffect, useState } from 'react';
import './App.css';

function App({name, experticeField, text}) {

    return (
        <section className="container">
            <div className="banner">
                <div className="banner-leftSide">
                    <div className="image"></div>
                    <h3 className="h3-name">{name}</h3>
                    <p className="first-p">{experticeField}</p>
                    <span className="icons-container">
                        <i className="icono-banner bi bi-linkedin"></i>
                        <i className="icono-banner bi bi-github"></i>
                    </span>
                </div>
                <div className="banner-rigthSide">
                    <h3 className="h3-hola">Hola</h3>
                    <p className="second-p">Aquí hay un poco sobre mi</p>
                    <span className="btns-container">
                        <button className="btn-banner">curriculum</button>
                        <button className="btn-banner">portafolio</button>
                    </span>
                    <p className="text">{text}</p>
                </div>
            </div>
        </section>
    );
    
}

export default App;
import Navbar from 'core/components/Navbar';
import Button from 'core/components/Navbar/Button';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Home = () => (
    <>
        <Navbar />
        <div className="home-container">
            <div className="home-title">
                <span>Desafio do Capítulo 3, <br /> Bootcamp DevSuperior</span>
            </div>
            <p className="home-description">
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. 
                Favor observar as instruções passadas no capítulo sobre a elaboração  
                deste projeto. <br />
                Este design foi adaptado a partir de Ant Design System for Figma,
                de  Mateusz Wierzbicki: <a href='antforfigma@gmail.com'>antforfigma@gmail.com</a>
           </p>
            <NavLink to="/search" className="button-nav">
                <Button text="Começar" />
            </NavLink>

        </div>
    </>
);

export default Home;
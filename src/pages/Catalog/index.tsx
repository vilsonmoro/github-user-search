import CardFilme from 'core/components/Card';
import Navbar from 'core/components/Navbar';
import Pagination from 'core/components/Pagination';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Catalog = () => (
    <>
        <Navbar showLogout={true}/>
        <div className="catalog-container">
            <div className="catalog-search">
                <select className="catalog-lista" >
                    <option>Aventura</option>
                </select>
            </div>

            <div className="catalog-movies">
               <NavLink to ="/movie">
                     <CardFilme title="O senhor dos aneis" subtitle="O retorno do rei" year="2013" />
               </NavLink>
               <NavLink to ="/movie">
                     <CardFilme title="Severina" subtitle="O xique xique" year="1800" />
                </NavLink>
               
            </div>
        </div>
       { <Pagination
          totalPages={10}
          activePage={1}
          onChange={page => 1}
        />}

    </>
);

export default Catalog;
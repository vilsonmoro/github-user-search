import React, { useState } from 'react';
import Navbar from 'core/components/Navbar';
import Button from 'core/components/Navbar/Button';

import './styles.scss';
import { Perfil } from 'core/types/Perfil';
import ImageLoader from 'core/components/Navbar/Loaders/ImageLoader';
import InfoLoader from 'core/components/Navbar/Loaders/InfoLoader';

const Search = () => {
    const [perfil, setPerfil] = useState<Perfil>();
    const [path, setPath] = useState('');
    const [isLoading, setIsloading] = useState(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPath(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            path
        }
        //pesquisa 
        setIsloading(true);

        fetch('https://api.github.com/users/' + payload.path)
            .then(response => response.json())
            .then(data => setPerfil(data))
            .finally(() => {
                setIsloading(false);
            });

    }

    return (
        <>
            <Navbar />
            <div className="search-container">
                <form onSubmit={handleSubmit}>
                    <div className="search-container-form">
                        <span className="search-title">Encontre um perfil Github</span>
                        <br />
                        <input
                            className="search-input"
                            type="text"
                            placeholder="Usuario github"
                            value={path}
                            onChange={handleOnChange}
                        />
                        <Button text="Encontrar " />
                    </div>
                </form>

                <div className="search-result-container">
                    {
                        isLoading ? <ImageLoader /> : (
                            <div className="search-result-col-3">
                                <img src={perfil?.avatar_url} alt={perfil?.avatar_url} className="search-img" />

                                <a href={perfil?.html_url} >
                                    <Button text="Ver perfil" />
                                </a>
                            </div>
                        )
                    }

                    {
                        isLoading ? <InfoLoader /> : (<div className="search-result-col-7">
                            <div className="search-item-info">
                                <span className="search-info-data">
                                    Repositorios publicos:{perfil?.public_repos}
                                </span>
                                <span className="search-info-data">
                                    Seguidores: {perfil?.followers}
                                </span>
                                <span className="search-info-data">
                                    Seguidos: {perfil?.following}
                                </span>
                            </div>

                            <div className="search-result-informacao">
                                <p> Informações</p>
                                <p><span>Empresa:</span> {perfil?.company} </p>
                                <p><span>Website/Blog:</span> {perfil?.blog}</p>
                                <p><span>Localidade:</span> {perfil?.location}</p>
                                <p><span>Membro desde: </span>{perfil?.created_at}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </>
    );
}

export default Search; 
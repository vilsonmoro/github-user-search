import React from 'react'; 
import {ReactComponent as Filme} from 'core/assets/images/filme.svg';
import './styles.scss';

type Props = {
    title: string,
    year: string,
    subtitle: string;
}
const CardFilme = ({title, year, subtitle}: Props) => (
     <>
        <div className="card-container">
            <Filme className="card-img" />

            <h2 className="card-title">{ title }</h2>
            <h2 className="card-year"> { year }</h2>
            <h2 className="card-subtitle">{subtitle}</h2>
        </div>
     </>
);

export default CardFilme;
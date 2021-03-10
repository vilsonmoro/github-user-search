import Navbar from 'core/components/Navbar';
import {ReactComponent as Filme} from 'core/assets/images/filme.svg';
import {ReactComponent as Star} from 'core/assets/images/star.svg';
import './styles.scss';

const Detail = () => (
    <>
         <Navbar showLogout={true} />
         <div className="detail-container">
             <div className="detail-content">
                  <div className="detail-img-container">
                      <Filme className="detail-img-movie"/>
                  </div>
                   
                   <div className="detail-movie">
                       <h3 className="detail-title">O retorno do rei</h3>
                       <h3 className="detail-year">O retorno do rei</h3>
                       <h3 className="detail-subtitle">O olho do inimigo está se movendo.</h3>
                       <div className="detail-descripton"> 
                          O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média se aproxima. 
                          Sauron planeja um grande ataque a Minas Tirith, capital de Gondor, o que faz com que Gandalf e Pippin partam
                            para o local na intenção de ajudar a resistência. Um exército é reunido por Theoden em Rohan, em mais uma 
                            tentativa de deter as forças de Sauron. 
                          Enquanto isso, Frodo, Sam e Gollum seguem sua viagem rumo à Montanha da Perdição para destruir o anel.
                       </div>
                   </div>
             </div>
               
             <div className="detail-form-save-avaliation">
                   <input type="text" className="detail-form-input" />
                   <button className="detail-form-button">SALVAR AVALIAÇÂO</button>
             </div>
             <div className="detail-avaliation">
                  <Star />
                  <h3 className="detail-avaliation-user">Maria Silva</h3>
                  <div>

                  </div>
             </div>
         </div>
    </>
);

export default Detail;
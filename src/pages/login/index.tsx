import { makeLogin } from "core/utils/request";
import { useForm } from "react-hook-form";
import './styles.scss';

type FormData ={
  username: string;
  password: string;
}
const FormLogin = () => {
 
  const { register, handleSubmit } = useForm<FormData>();  
  const onSubmit = (data: FormData) => {
    //chama a API
     makeLogin(data);    
   }

  return (
    <div className="form-container">
      <h1 className="lb-login">LOGIN</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          className="form-input"
          placeholder="Email"
          name="username"
          ref={register}
        />

        <input         
          type="password"
          className="form-input"
          placeholder="Senha"
          name="password"
          ref={register}
        />

        <div className="btn-container">
          <button className="btn-content">            
              LOGAR          
          </button>
        </div>
      </form>
    </div>
  )
}   
             
export default FormLogin;
import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login </h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required/>  
                        
                </div>   
                <div className="input-box">
                    <input type="password" placeholder='Password' required/> 
                         
                </div> 

                <div className="remember-forgot">
                    <label><input type="Checkbox" />Manter Salvo</label>
                    <a href="#"> Esqueci minha senha</a>
                </div>
                <button type="submit">Entrar</button>
                <div classname="register-link"><p>Não possui uma conta? <a href="#">Cadastre-se</a></p></div>
                    
            </form>
        </div>
    );
};

export default LoginForm;
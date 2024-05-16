import React from 'react'

import { useState } from 'react'

import { FaLock, FaUser } from 'react-icons/fa'

import "./Login.css";

const Login1 = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Envio"); 
  };


  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Faça o Login < br/> KitFit</h1>
 
        <div className="input-field">
        <input type="email" placeholder="E-mail"
        onChange={(e) => setUsername(e.target.value)} />
        <FaUser className="icon" />
        </div>

        <div className="input-field">
          <input type="password" placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)} />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>

        <button>Entrar</button>

        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="#">Registrar</a>
          </p>
        </div>
       </form>
    </div>
  )
} 

export default Login1

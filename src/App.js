import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Query } from 'react-apollo';
import UsuariosLista from './componentes/Usuario/UsuariosLista/UsuariosLista';
import UsuarioEditar from './componentes/Usuario/UsuarioEditar/UsuarioEditar';


const App = () => {

  return (
    <div className="App">

      <UsuariosLista />
      <UsuarioEditar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

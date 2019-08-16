import React from 'react'
import { Link } from 'react-router-dom'
import UsuarioEditarVista from './UsuarioEditarVista';


class UsuarioEditar extends React.Component {

    render() {

        return <UsuarioEditarVista {...this.props}/>

    }

}

export default UsuarioEditar;

import React from 'react';

import style from './UsuariosLista.scss';
import UsuarioResumen from '../UsuarioResumen/UsuarioResumen';

const UsuariosListaVista = ({usuarios}) => {
    
    let usuariosMostrar = usuarios.map(u => (
        <UsuarioResumen {...u}/>
    ))

    return (
        <ul className="UsuariosLista">
            { usuariosMostrar }
        </ul>
    )

}

export default UsuariosListaVista;
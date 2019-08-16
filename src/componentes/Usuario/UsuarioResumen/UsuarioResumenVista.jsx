import React from 'react';

import style from './UsuarioResumen.scss';

const UsuarioResumenVista = ({
    id,
    nombreUsuario
}) => (
    <article className="UsuarioResumen">
        <a href="#">
            <h4>
                { nombreUsuario }
            </h4>
        </a>
    </article>
)

export default UsuarioResumenVista;

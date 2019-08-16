import React from 'react';

import style from './UsuarioResumen.scss';

const UsuarioResumenVista = ({
    id,
    nombreUsuario
}) => (
    <article class="UsuarioResumen">
        <a href="#">
            <h4>
                { nombreUsuario }
            </h4>
        </a>
    </article>
)

export default UsuarioResumenVista;
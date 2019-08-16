import React from 'react'
import { Link } from 'react-router-dom'
import UsuarioResumenVista from './UsuarioResumenVista';



class UsuarioResumen extends React.Component {

    render() {

        return <UsuarioResumenVista {...this.props}/>

    }

}

export default UsuarioResumen;
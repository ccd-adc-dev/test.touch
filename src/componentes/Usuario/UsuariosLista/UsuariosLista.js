import React from 'react'
import { Link } from 'react-router-dom'
import UsuariosListaVista from './UsuariosListaVista';
import USUARIOS from '../../../funciones/graphql/USUARIOS';
import { Query } from 'react-apollo';



class UsuariosLista extends React.Component {

    render() {

        return (
            <Query query={USUARIOS}>

            {({ loading, error, data}) => {

            if (loading)
                return <div>Loading...</div>

            if (error)
                return <div>Error!</div>
            
            if( !! data ) {
                
                console.log(data);

                return <UsuariosListaVista usuarios={data.usuarios}/>
                
            }

            }}

        </Query>
        
    )


    }

}

export default UsuariosLista;
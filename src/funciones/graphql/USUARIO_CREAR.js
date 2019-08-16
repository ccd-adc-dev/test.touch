import gql from "graphql-tag";


export default gql`

query USUARIOS {

    usuarios {
        id
        nombreUsuario
    }

}

`
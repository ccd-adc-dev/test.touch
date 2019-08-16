import gql from "graphql-tag";

// definimos lo q se puede aceptar
export default gql`
mutation USUARIO_MODIFICAR (
  $id: String,
  $status: String,
  $imagenPerfil: String,
  $nombreUsuario: String,
  $fechaNacimiento: String,
  $genero: String,
  $nombres: String,
  $apellidos: String,
  $contrasenna: String,
  $email: String
) {
  usuarioActualizar(
      id: $id,
      status: $status,
      imagenPerfil: $imagenPerfil,
      nombreUsuario: $nombreUsuario,
      fechaNacimiento: $fechaNacimiento,
      genero: $genero,
      nombres: $nombres,
      apellidos: $apellidos,
      contrasenna: $contrasenna,
      email: $email
  ) {
    id,
    status,
    imagenPerfil,
    nombreUsuario,
    fechaNacimiento,
    genero,
    nombres,
    apellidos,
    contrasenna,
    email
  }
}
`

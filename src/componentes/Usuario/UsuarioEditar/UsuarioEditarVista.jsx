import React from 'react';
import {useMutation} from '@apollo/react-hooks'
import USUARIO_MODIFICAR from '../../../funciones/graphql/USUARIO_MODIFICAR';

//
import style from './UsuarioEditar.scss';

const UsuarioEditarVista = ({
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
}) => {
  let input
  console.log("X: " , input);
  const usuarioCampos = ['id','status','imagenPerfil','nombreUsuario','fechaNacimiento','genero','nombres','apellidos','contrasenna','email']
  const inputArr = usuarioCampos.map((campo,i) => {
    return (
      <div>
        <label>
          {campo.toUpperCase() + ": "}
          <input key={i} type="text" name={campo} ref={node => {
                input = node
          }}
            />
        </label>
      </div>
    )
  })

  const [usuarioActualizar,{data}] = useMutation(USUARIO_MODIFICAR)
  // console.log(inputArr);
  return (
    <div>
      <form onSubmit={async (e) => {
          e.preventDefault()
          const response = await usuarioActualizar ({
            variables: {
              nombreUsuario: "input.value",
            },
            errorPolicy: 'all'
          }
        )
        console.log(response);
        input.value = ''
      }}
      >
      {
        inputArr
      }
      <div>
        <button type="submit">Editar</button>
      </div>
    </form>
  </div>
)
}

export default UsuarioEditarVista;

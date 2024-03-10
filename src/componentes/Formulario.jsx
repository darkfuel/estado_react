// aqui agrego los inputs
// crear un estado para mostrar o esconder las alertas
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

function Formulario () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [conpass, setconpass] = useState('')

  return (
    <>
      <Form.Control type='text' id='formName' placeholder='Nombre' />
      <br />
      <Form.Control type='email' id='formEmail' pattern='.+@example\.com' placeholder='tuemail@ejemplo.com' />
      <br />
      <Form.Control size='sm' type='password' id='formPass' placeholder='Contraseña' />
      <br />
      <Form.Control size='sm' type='password' id='formConfirm' placeholder='Confirma tu contraseña' />
      <br />
      <Button variant='success'>Registrarse</Button>
    </>

  )
}

export default Formulario

// aqui agrego los inputs
// crear un estado para mostrar o esconder las alertas
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

function Formulario ({ setError, setMsg, setStatus }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [conpass, setConpass] = useState('')

  const validNull = (e) => {
    e.preventDefault()
    if (name === '' || email === '' || pass === '' || conpass === '') {
      setError(true)
      setMsg('Complete todos los campos')
      setStatus('danger')
      console.log('espacios vacios')
      return
    }
    if (pass !== conpass) {
      setError(true)
      setMsg('Las constraseñas no coinciden')
      setStatus('danger')
      console.log('contraseñas')
      return
    }
    if (name !== '' || email !== '' || pass !== '' || conpass !== '') {
      setError(true)
      setMsg('Registro completo')
      setStatus('success')
      setName('')
      setEmail('')
      setPass('')
      setConpass('')
      return
    }
    setError(false)
    console.log('no hay error')
  }

  return (
    <>
      <form onSubmit={validNull}>

        <Form.Control
          type='text'
          id='formName'
          placeholder='Nombre'
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <Form.Control
          type='email'
          id='formEmail'
          placeholder='tuemail@ejemplo.com'
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <Form.Control
          size='sm'
          type='password'
          id='formPass'
          placeholder='Contraseña'
          onChange={(e) => setPass(e.target.value)}
        />
        <br />
        <Form.Control
          size='sm'
          type='password'
          id='formConfirm'
          placeholder='Confirma tu contraseña'
          onChange={(e) => setConpass(e.target.value)}
        />
        <br />
        <Button variant='success' type='submit'>Registrarse</Button>
      </form>
      <br />
    </>
  )
}

export default Formulario

import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import SocialButton from './SocialButton'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Formulario from './Formulario'
import '../main.css'
import MyAlert from './MyAlert'

function Registro () {
  const [error, setError] = useState(false)
  const [msg, setMsg] = useState(false)
  const [status, setStatus] = useState(false)

  return (
    <Container className='text-center'>
      <h1 className='text-center'>Crea una cuenta</h1>
      <SocialButton
        icon={faFacebook}
        link='http://facebook.com'
      />
      <SocialButton
        icon={faGithub}
        link='http://github.com'
      />
      <SocialButton
        icon={faLinkedin}
        link='http://linkedin.com'
      />
      <p>O usa tu email para registrarte</p>
      <Formulario setError={setError} setMsg={setMsg} setStatus={setStatus} />
      {error ? <MyAlert status={status} texto={msg} /> : null}
      <br />
    </Container>
  )
}

export default Registro

import React from 'react'
import Container from 'react-bootstrap/Container'
import SocialButton from './SocialButton'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Formulario from './Formulario'

function Registro () {
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
      <Formulario />

    </Container>
  )
}
export default Registro

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import Registro from './componentes/Registro'

function App () {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Crea una Cuenta</Card.Title>
        <Card.Text>
          <Registro
            facebook='faFacebook'
            github='faGithub'
            linkedin='faLinkedin'
          />
        </Card.Text>
      </Card.Body>
      <input type='text' />
      <input type='text' />
      <Card.Body>
        <button>Summit</button>
      </Card.Body>
    </Card>
  )
}
export default App

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const SocialButton = (props) => {
  console.log(props.facebook)
  return (
    <>
      <a href='http://facebook.com'><FontAwesomeIcon icon={faFacebook} /></a>
      <a href='http://github.com'><FontAwesomeIcon icon={faGithub} /></a>
      <a href='http://linkedin.com/'><FontAwesomeIcon icon={faLinkedin} /></a>
    </>
  )
}

export default SocialButton

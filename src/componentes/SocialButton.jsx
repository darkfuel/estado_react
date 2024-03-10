import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialButton = ({ icon, link }) => {
  return (

    <a href={link}><FontAwesomeIcon icon={icon} style={{ margin: '5px', fontSize: '40px' }} /></a>

  )
}

export default SocialButton

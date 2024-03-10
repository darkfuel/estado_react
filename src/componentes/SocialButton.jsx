import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialButton = ({ icon, link }) => {
  return (

    <a href={link}><FontAwesomeIcon icon={icon} /></a>

  )
}

export default SocialButton

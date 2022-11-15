import ProfilPic from '../../../assets/images/profil.png'
import './index.scss'

const Logo = () => {

  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        src={ProfilPic}
        alt="julien Sarda"
      />
    </div>
  )
}

export default Logo

import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <nav className="nav-bar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
        className="logo-image"
        alt="website logo"
      />
      <button type="button" className="button" onClick={onClickLogout}>
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)

import Logo from '../../assets/img/logo.svg';
import './style.css';
function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={Logo} alt="DSmeta" />
          <h1>DSMeta</h1>
          <p>Densenvolvido por <a href="https://www.google.com">JohnDoe</a></p>
      </div>
    </header>
  )
}
export default Header

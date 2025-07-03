import logo from '../assets/logo.jpg';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <img src={logo} height="50px" alt="logo" className="logo-image" />
          <span className="header-name">CookPrompt</span>
        </div>
      </div>
    </header>
  );
}
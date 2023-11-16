import logo from '../logo.png';

const Header = () => {
  return (
    <header>
      <img
        src={logo}
        className="app-logo"
        alt="logo"
      />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
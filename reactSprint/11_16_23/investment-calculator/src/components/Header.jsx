import logo from '../logo.svg';

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
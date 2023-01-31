import User from "./User";
import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Logo />
        <User userName="Etienne" />
      </div>
    </header>
  );
};

export default Header;

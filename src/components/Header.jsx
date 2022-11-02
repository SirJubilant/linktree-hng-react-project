import Profile from "../assets/jubilant.jpg"

import "./Header.css";

const Header = () => {
  return (
    <header>
      <section className="header-content">
        <div className="profile-img">
          <img src={Profile} alt="profile" />
        </div>

        <h3 id='name'>Jubilant Agida</h3>

        <h2 id='slack'>Jubilant Agida</h2>
      </section>
    </header>
  );
};

export default Header;

import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <>
          {/* Header */}
      <header className="header fadeDown">
        <div className="logoArea">
          <img src={logo} alt="School Logo" className="logo" />
          <h1 className="schoolName">
            Cedar-Wood Academy
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Our School</a>
          <a href="#">Pupil Voice</a>
          <a href="#">Parents</a>
          <a href="#">Admissions</a>
          <a href="#">News</a>
          <a href="#">Contact</a>
          <a href="#" className="highlight">Children's Zone</a>
        </nav>
      </header>
      </>
    )

}

export default Navbar;
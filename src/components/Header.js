import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">ShareNotes</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div  className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item"><NavLink exact = 'true' className='nav-link' to="/">Головна</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/note">Замітки</NavLink></li>
                <li className="nav-item"><NavLink className='nav-link' to="/create">Створити</NavLink></li>
                <li className="nav-item"><NavLink  className='nav-link' to="/about">Про сайт</NavLink></li>       
              </ul>
            </div>
        </div>      
        </nav>
    </div>
  );
}

export default Header;

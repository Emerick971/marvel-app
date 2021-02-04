import React from "react";
import CloseIcon from '@material-ui/icons/Close';
import {Link} from "react-router-dom";


const SideNavBar = ({ close, display }) => {
  let Classes = "side-nav-bar";
  if (display) {
    Classes = "side-nav-bar open";
  }

  return (
    <nav className={Classes}>
        <div onClick={close}>
          <CloseIcon />
        </div>

        <input id="searchBarMobile" type="text" placeholder="Rechercher"></input>
        
        <div className="links">
          <Link to="/">Accueil</Link>
          <Link to="/personnages">Personnages</Link>
          <Link to="/createurs">Créateurs</Link>
        </div>
    </nav>
  );
};

export default SideNavBar;
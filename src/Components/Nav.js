import "../CompStyles/Nav.css";
import logo from "../images/fonedoc-logo.png";

function Nav() {
    return (
        <nav>
            <img src={logo} />
            <h3>FoneDoc</h3>
            <h4>Mobile Phone Repair</h4>
        </nav>
    )
}

export default Nav;
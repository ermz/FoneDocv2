import "../CompStyles/Nav.css";
import logo from "../images/fonedoc-logo.png";
import logoTitle from "../images/fonedoc-title.png";

function Nav() {
    return (
        <nav>
            <div class="logo-holder">
                <img src={logo} />
                <img src={logoTitle} />
            </div>
            <h3>Mobile Phone Repair</h3>
        </nav>
    )
}

export default Nav;
import "../CompStyles/Header.css"
import fonedoclogo from "../images/fonedoc-logo.png";

export default function Header() {
    return (
        <header className="header">
            <img src={fonedoclogo} className="header-img"/>
            <h2 className="header-title">Header components</h2>
            <h4 className="header-project">FoneDoc / Mobile Phone Repair</h4>
        </header>
    )
}
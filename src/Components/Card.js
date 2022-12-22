import "../CompStyles/Card.css";
import cardpic from "../images/smartwatchrepair.png";

export default function Card () {
    return (
        <div className="card">
            <img src={cardpic} className="card-image" />
            <div className="card-stats">
                <span>$</span>
                <span>60+</span>
            </div>
            <p>All <strong>Apple</strong> smartwatches</p>
            <p>Screen, battery, etc.</p>
        </div>
    )
}
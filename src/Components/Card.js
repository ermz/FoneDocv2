import "../CompStyles/Card.css";

export default function Card (props) {
    // const date = new Date()
    // const hours = date.getHours()
    // let timeOfDay

    // if (hours < 12) {
    //     timeOfDay = "morning"
    // } else if (hours >= 12 && hours < 17) {
    //     timeOfDay = "afternoon"
    // } else {
    //     timeOfDay = "night"
    // }
    let badgeText
    if (props.available === false) {
        badgeText = "UNAVAILABLE"
    } else if (props.sale > 0) {
        badgeText = "SALE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.img} className="card-image" />
            <div className="card-stats">
                <span>$</span>
                <span>{props.cost}</span>
            </div>
            <p>All <strong>Apple</strong> smartwatches</p>
            <p className="card--title">{props.name}</p>
        </div>
    )
}
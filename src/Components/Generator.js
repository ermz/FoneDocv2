import "../CompStyles/Generator.css"

export default function Generator () {
    return (
        <main className="main-form">
            <form className="form">
                <input type="text" placeholder="Front" className="form-input"></input>
                <input type="text" placeholder="Back" className="form-input"></input>
                <button className="form-button">View our other services</button>
            </form>
        </main>
    )
}
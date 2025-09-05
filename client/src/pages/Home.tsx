import { Link } from "react-router"
import "../style/home.css"

export default function Home() {
    return (
        <div className="bodyHome">
            <h1>RiddleQuest</h1>
            <h3>Challenge Your Mind with Epic Riddles</h3>
            <header className="headerHome"></header>
            <div className="mainHome">
                <Link className="contentHome" to="/signUp">sing up</Link>
                <Link className="contentHome" to="/login">Login</Link>
                <Link className="contentHome" to="/play">start Game</Link>
            </div>
        </div>
    )
}

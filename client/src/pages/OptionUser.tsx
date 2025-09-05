// import { useContext } from "react"
// import { MyRiddle } from "../App"
import { useNavigate } from "react-router"
import "../style/optionUser.css"


export default function OptionUser() {
    const navigate = useNavigate()

    // const allRiddle = useContext(MyRiddle)

    return (
        <div className="mainUser">
            <button className="buttonUser" onClick={() => { navigate("/play") }}>play game</button>  
            <button className="buttonUser" onClick={() => { navigate("/addRiddle") }} >add Riddle</button>
        </div>
    )
}

// import { useContext } from "react";
import { useNavigate } from "react-router"
import "../style/optionAdmim.css"
// import { MyRiddle } from "../App"


export default function OptionAdmin() {
  const navigate = useNavigate()
    // const allRiddle = useContext(MyRiddle)
  

  return (
    <div className="mainAdmin">
      <button className="buttonAdmin" onClick={() => { navigate("/play") }}>play game</button>
      <button className="buttonAdmin" onClick={()=>{navigate("/addRiddle")}}>add Riddle</button>
      <button className="buttonAdmin">Update riddle</button>
      <button className="buttonAdmin">delete Riddle</button>
    </div>

  )
}

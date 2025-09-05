import { useContext, useState } from "react"
import { MyRiddle } from "../App"
import "../style/game.css"
export default function Game() {

  const [count, setCount] = useState(0)
  const [answer, setAnswer] = useState("")
  const [eror, setEror] = useState("")
  const [goodAnswer, setGoodAnswer] = useState("")

  const allRiddle = useContext(MyRiddle)
  // console.log("dd", allRiddle)

  function checkAnswer() {
    if (allRiddle?.[count].correctAnswer === answer) {
      setCount((e) => e + 1)
      setAnswer("")
      setEror("")
      setGoodAnswer("correct answer")
      
    }
    else {
      setEror("worng answer try agein")
      setAnswer("")
      setGoodAnswer("")
    }
  }

  return (
    <div className="mainGame">
      <div className="level">
        <p id="p">level:</p>
        <h2 id="a">{allRiddle?.[count]?.name || ""}</h2>
      </div>
      <div className="Description">{allRiddle?.[count]?.taskDescription || ""}</div>
      <input className="inputGame" placeholder="enter your answver" type="text" value={answer} onChange={(e) => { setAnswer(e.target.value) }} />
      <button className="buttonGame" onClick={checkAnswer}>send</button>
      {goodAnswer && <p>{goodAnswer}</p>}
      {eror && <p>{eror}</p>}
    </div>
  )
}

import { useState,useContext } from "react"
import { tokenContex } from "../App"
import "../style/addRiddle.css"

export default function AddRiddle() {
    const [level, setLevel] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [answer, setAnswer] = useState("")
    const [msg, setMsg] = useState("")

    const token = useContext(tokenContex)
    console.log("Tokken",token)
  
    const newRiddle = {
        name: level,
        taskDescription: taskDescription,
        correctAnswer: answer
    }

    async function addRidlle(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const add = await fetch("http://localhost:3000/riddle/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token?.token}`,
            },
            body: JSON.stringify(newRiddle)
        })
        const data = await add.json();
        console.log("object", data)
        if (data.msg) {
            setMsg(data.msg)
        }
        else {
            setMsg(data.eror)
        }

    }

    return (
        <div >
            <form className="mainAdd" onSubmit={addRidlle}>
                <h1 className="title">Add Riddle To List</h1>
                <input className="inputAdd" value={level} placeholder="entet level" onChange={(e) => { setLevel(e.target.value) }} type="text" />
                <input className="inputAdd" value={taskDescription} placeholder="enter taskDescription" onChange={(e) => { setTaskDescription(e.target.value) }} type="text" />
                <input className="inputAdd" value={answer} placeholder="entet answer" onChange={(e) => { setAnswer(e.target.value) }} type="text" />
                <button className="buttonAdd">submit</button>
                {msg && <p>{msg}</p>}
            </form>
        </div>
    )
}

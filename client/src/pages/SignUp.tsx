import { useNavigate } from "react-router"

export default function SignUp() {
  const navigate = useNavigate()

  function hendelSubmit(e: any) {
    e.preventDefault()
    navigate("/option")
  }
  
  return (
    <div>
      <form onSubmit={hendelSubmit} action="">
        <input type="text" />
        <input type="text" />
        <button>submit</button>
      </form>
    </div>
  )
}

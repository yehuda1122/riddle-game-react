import { useNavigate } from "react-router"

export default function Login() {
    const navigate = useNavigate()

    function hendelSubmit(e: any) {
        e.preventDefault()
        navigate("/option")
    }
    return (
        <div>
            <form onSubmit={hendelSubmit} action="">
                <input name="usernName" type="text" />
                <input name="password" type="text" />
                <button >submit</button>
            </form>
        </div>
    )
}

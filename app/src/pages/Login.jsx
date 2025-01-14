import { useDispatch } from "react-redux"
import { login } from "../store/slices/authSlice";

const Login = () => {
    const dispatch = useDispatch();

    const handleLogin = () => {
        // Login request to server
        const response = {
            user: {
                id: 1,
                first_name: "Alessandro",
                last_name: "D'Antoni",
                email: "example@email.com",
            },
            token: "my_authentication_token"
        }

        dispatch(login(response));
    }

    return (
        <>
            <button onClick={handleLogin}>Login</button>
        </>
    )
}

export default Login
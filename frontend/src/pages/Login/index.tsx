import { Link } from "react-router-dom";
import './style.css';
import logo from '../../../public/LOGO - PARA O FUNDO BRANCO.png';

function Login(){
    return(
        <div>
            <h1>Login page</h1>
            <Link to="/" className="link-home">Home</Link>
            <img src="../../../public/LOGO - PARA O FUNDO BRANCO.png" alt="logo" />
        </div>
    )
}

export default Login;
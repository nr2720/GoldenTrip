import { Link } from 'react-router-dom';
import './ErrorPage.css'
const ErrorPage = () => {
    return(
        <div className="containerError">
            <h1>Seems that this page doesn't exist.</h1>
            <Link to='/'>
                Click here to go back !
            </Link>
        </div>
    )
}


export default ErrorPage
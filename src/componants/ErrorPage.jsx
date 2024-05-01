import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return(
        <div className="container">
            <h1>Seems that this page doesn't exist.</h1>
            <Link to='/'>
                Click here to go back !
            </Link>
        </div>
    )
}


export default ErrorPage
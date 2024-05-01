
import { Link } from "react-router-dom";



function Header({name}) {
    return(
        <nav className='header'>
            <div className="leftHeader">
                <h2>{name}</h2>
            </div>
            <div className="rightHeader">
                <button className="buttonGold">Survey</button>
                <button className="buttonGold">About us</button>
                <Link to='/vip' className="buttonGold">VIP</Link>
            </div>
        </nav> 
    )
}

export default Header;

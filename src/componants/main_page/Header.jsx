
import { Link } from "react-router-dom";



function Header({name, className}) {
    return(
        <nav className={className}>
            <Link to='/' className="leftHeader">
                <img src="/flashTrip.svg" alt={name} className="Logo" />
            </Link>
            <div className="rightHeader">
                <button className="buttonGold">Survey</button>
                <button className="buttonGold">About us</button>
                <Link to='/vip' className="buttonGold">VIP</Link>
            </div>
            <Link to='/cart'>
            <svg id="cartSVG" version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
            fill="#fee6e3" stroke="none">
            <path d="M10 210 c0 -5 4 -10 10 -10 16 0 34 -43 34 -85 l1 -40 68 -3 c42 -2
            67 1 67 8 0 6 -25 10 -61 10 -37 0 -58 4 -54 10 3 6 26 10 50 10 42 0 46 2 65
            40 11 21 20 42 20 45 0 3 -36 5 -80 5 -47 0 -80 4 -80 10 0 6 -9 10 -20 10
            -11 0 -20 -4 -20 -10z"/>
            <path d="M54 49 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16
            -11z"/>
            <path d="M154 49 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16
            -11z"/>
            </g>
            </svg>
            </Link>
        </nav> 
    )
}

export default Header;

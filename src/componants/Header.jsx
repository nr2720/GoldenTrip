
function Header({name}) {
    return(
        <nav className='header'>
            <div className="leftHeader">
                <h2>{name}</h2>
            </div>
            <div className="rightHeader">
                <button className="buttonGold">Survey</button>
                <button className="buttonGold">About us</button>
                <button className="buttonGold">VIP Section</button>
            </div>
        </nav> 
    )
}

export default Header;

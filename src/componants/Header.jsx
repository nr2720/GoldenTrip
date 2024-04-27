
function Header({name}) {
    return(
        <nav className='header'>
            <div className="leftHeader">
                <h2>{name}</h2>
            </div>
            <div className="rightHeader">
                <button className="buttonGold">Choose</button>
                <button className="buttonGold">About</button>
                <button className="buttonGold">Book now</button>
            </div>
        </nav> 
    )
}

export default Header;

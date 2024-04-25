
function Header({name}) {
    return(
        <header className='header'>
            <div className="leftHeader">
                <h2>{name}</h2>
            </div>
            <div className="rightHeader">
                <button className="headerButton">Choose</button>
                <button className="headerButton">About</button>
                <button className="headerButton">Book now</button>
            </div>
        </header>
    )
}

export default Header;

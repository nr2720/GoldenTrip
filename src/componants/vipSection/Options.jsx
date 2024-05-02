import { Link } from "react-router-dom"


const Options = ({img, title, text, price, id, onClick }) => {
    return(
        <>
            <div className='optionsVip' id={id}>
                <img src={img} className='flashTripVipLogo'alt="FlashTrip Vip" />
                <h2>{title}</h2>
                <p>{text}</p>
                <p>Price : {price} USD</p>
                <Link to='/cart'>
                    <button onClick={onClick} value={id} className="buttonGold">Add to cart!</button>
                </Link>
            </div>
        </>
    )
}

export default Options
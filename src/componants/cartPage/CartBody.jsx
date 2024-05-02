import Options from "../vipSection/Options";

const CartBody = ({isEmpty, El}) => {
    return (
        !isEmpty ? (
            <div className="cartBody">
                <h1>Your cart</h1>
                <div className="cartElement">
                    <img src={El.img} alt="FlashTrip Vip" className="flashTripVipLogo" />
                    <h2>{El.title}</h2>
                    <p>{El.text}</p>
                    <p>Price : {El.price}</p>
                </div>
                <button className="buttonGold cartButton">Finish order</button>
             </div>
        ) : (
            <div className="cartBodyEmpty">
                <h2>Your cart is empty.</h2>
            </div>
        )
    )
}

export default CartBody;
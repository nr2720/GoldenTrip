import { Link } from "react-router-dom";

const CartHeader = ({price, onClick}) => {
    return(
        <div className="cartHeader">
            <button className="buttonGold cartButton" onClick={onClick}>Clear Cart</button>
            <h2>{price}$</h2>
            <Link to='/purchase'><button className="buttonGold cartButton">Finish order</button></Link>
        </div>
    )
}

export default CartHeader;
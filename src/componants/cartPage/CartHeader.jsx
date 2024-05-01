const CartHeader = ({price}) => {
    return(
        <div className="cartHeader">
            <button className="buttonGold cartButton">Clear Cart</button>
            <h2>{price} $</h2>
            <button className="buttonGold cartButton">Finish your order</button>
        </div>
    )
}

export default CartHeader;
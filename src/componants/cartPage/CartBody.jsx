const CartBody = ({isEmpty, El}) => {
    return (
        !isEmpty ? (
            <div className="cartBody">
            <h1>Your cart</h1>
            <>{El}</>
             </div>
        ) : (
            <div className="cartBodyEmpty">
                <h2>Your cart is empty.</h2>
            </div>
        )
    )
}

export default CartBody;
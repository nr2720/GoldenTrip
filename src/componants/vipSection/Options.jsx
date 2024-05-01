import { Link } from "react-router-dom"


const Options = ({img, title, text, price, id}) => {
    return(
        <>
            <div className='optionsVip' id={id}>
                <img src={img} alt="" />
                <h2>{title}</h2>
                <p>{text}</p>
                <p>Price : {price} USD</p>
                <Link to='/'>Buy now</Link>
            </div>
        </>
    )
}

export default Options
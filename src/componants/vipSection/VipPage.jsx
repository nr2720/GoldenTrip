import './VipPage.css'
import Header from "../main_page/Header";
import MiddleVip from "./MiddleVip";

const VipPage = ({cartClick}) => {
    return(
        <>
            <div className="containerVip">
                <Header name='FlashTrip' className='vipHeader'/>
                <MiddleVip handleCartClick={cartClick} />
            </div>
        </>
    )
}

export default VipPage;
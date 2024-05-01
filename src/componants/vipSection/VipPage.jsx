import './VipPage.css'
import Header from "../main_page/Header";
import MiddleVip from "./MiddleVip";

const VipPage = () => {
    return(
        <>
            <div className="containerVip">
                <Header name='Golden Trip &#x2708;'/>
                <MiddleVip />
            </div>
        </>
    )
}

export default VipPage;
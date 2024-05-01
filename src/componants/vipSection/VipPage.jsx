import './VipPage.css'
import Header from "../main_page/Header";
import MiddleVip from "./MiddleVip";

const VipPage = () => {
    return(
        <>
            <div className="containerVip">
                <Header />
                <MiddleVip />
            </div>
        </>
    )
}

export default VipPage;
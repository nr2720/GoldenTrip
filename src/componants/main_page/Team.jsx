import { useState } from 'react'
import party1 from '/carouselmg/party1.png'
import party2 from '/carouselmg/party2.png'
import party3 from '/carouselmg/party3.png'
import party4 from '/carouselmg/party4.png'
import party5 from '/carouselmg/party5.png'

import relax1 from '/carouselmg/relax1.png'
import relax2 from '/carouselmg/relax2.png'
import relax3 from '/carouselmg/relax3.png'
import relax4 from '/carouselmg/relax4.png'
import relax5 from '/carouselmg/relax5.png'

import explore1 from '/carouselmg/explore1.png'
import explore2 from '/carouselmg/explore2.png'
import explore3 from '/carouselmg/explore3.png'
import explore4 from '/carouselmg/explore4.png'
import explore5 from '/carouselmg/explore5.png'




function Team() {
    const [selectedCard, setSelectedCard] = useState(1);
    const [selectedImg, setSelectedImg] = useState(
        [party1, party2, party3, party4, party5]
    )

    const handleClick = (event) => {
        setSelectedCard(parseInt(event.target.id.slice(1)))
    }

    const handleTouch = (event) => {
        setSelectedCard(parseInt(event.target.id.slice(1)))
    }


    const handleChoice = (event) => {
        let newArr = [];
        const e = parseInt(event.target.value);
        switch(e){
            case 0:
                newArr = [party1, party2, party3, party4, party5];
                break;
            case 1:
                newArr = [relax1, relax2, relax3, relax4, relax5];
                break;
            case 2:
                newArr = [explore1, explore2, explore3, explore4, explore5];
                break;
            default:
                break;
        }
        setSelectedImg(newArr);
    }


    return(
<div className="carouselDay">
    <h1 id='mysteryH1'>What your average day will look like ?</h1>
    <div className="teamSection">
        <div className="slide-wrapper">
            <div className="slider">
                <input type="radio" name="slider" id="s1" defaultChecked={selectedCard === 1} onClick={handleClick} onTouchStart={handleTouch}/>
                <input type="radio" name="slider" id="s2" defaultChecked={selectedCard === 2} onClick={handleClick} onTouchStart={handleTouch}/>
                <input type="radio" name="slider" id="s3" defaultChecked={selectedCard === 3} onClick={handleClick} onTouchStart={handleTouch}/>
                <input type="radio" name="slider" id="s4" defaultChecked={selectedCard === 4} onClick={handleClick} onTouchStart={handleTouch}/>
                <input type="radio" name="slider" id="s5" defaultChecked={selectedCard === 5} onClick={handleClick} onTouchStart={handleTouch}/>

                <div className="cards">
                    <label htmlFor="s1" id="slide1">
                        <div className="card">
                            <img className='imageSlide' src={selectedImg[0]} alt="*" />
                        </div>
                    </label>
                    <label htmlFor="s2" id="slide2">
                        <div className="card">
                            <img className='imageSlide' src={selectedImg[1]} alt="*" />
                        </div>
                    </label>
                    <label htmlFor="s3" id="slide3">
                        <div className="card">
                            <img className='imageSlide' src={selectedImg[2]} alt="*" />
                        </div>
                    </label>
                    <label htmlFor="s4" id="slide4">
                        <div className="card">
                            <img className='imageSlide' src={selectedImg[3]} alt="*" />
                        </div>
                    </label>
                    <label htmlFor="s5" id="slide5">
                        <div className="card">
                            <img className='imageSlide' src={selectedImg[4]} alt="*" />
                        </div>
                    </label>
                </div>
            </div>
        </div>
        <div className="ChoiceButtons">
        
        <button className='buttonGold buttonCar' value={0} onClick={handleChoice}>Party</button>
        <button className='buttonGold buttonCar' value={1} onClick={handleChoice}>Relax</button>
        <button className='buttonGold buttonCar'  value={2} onClick={handleChoice}>Adventure</button>
        
     </div>
     </div>

     <div className="customShapeThree">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
    </svg>
</div>
     </div>
    )
}


export default Team;
import { useState } from 'react'
function Team() {
    const [selectedCard, setSelectedCard] = useState(1);

    const handleClick = (event) => {
        setSelectedCard(parseInt(event.target.id.slice(1)))
    }


    return(
<div className="ourTeamSec">
    <h1 id='mysteryH1'>What will it be ?</h1>
    <div className="teamSection">
        <div className="slide-wrapper">
            <div className="slider">
                <input type="radio" name="slider" id="s1" checked={selectedCard === 1} onClick={handleClick}/>
                <input type="radio" name="slider" id="s2" checked={selectedCard === 2} onClick={handleClick}/>
                <input type="radio" name="slider" id="s3" checked={selectedCard === 3} onClick={handleClick}/>
                <input type="radio" name="slider" id="s4" checked={selectedCard === 4} onClick={handleClick}/>
                <input type="radio" name="slider" id="s5" checked={selectedCard === 5} onClick={handleClick}/>

                <div className="cards">
                    <label htmlFor="s1" id="slide1">
                        <div className="card">
                            <img className='imageSlide' src="/carouselmg/image1.png" alt="*" />
                        </div>
                    </label>
                    <label htmlFor="s2" id="slide2">
                        <div className="card">
                            <img className='imageSlide' src="/carouselmg/image2.png" alt="*" />
                        </div>
                    </label>
                    <label htmlFor="s3" id="slide3">
                        <div className="card">
                            <img className='imageSlide' src="/carouselmg/image3.png" alt="*" />
                        </div>
                    </label>
                    <label htmlFor="s4" id="slide4">
                        <div className="card">
                            <img className='imageSlide' src="/carouselmg/image4.png" alt="*" />
                        </div>
                    </label>
                    <label htmlFor="s5" id="slide5">
                        <div className="card">
                            <img className='imageSlide' src="/carouselmg/image5.png" alt="*" />
                        </div>
                    </label>
                </div>
            </div>
        </div>
        <div className="ChoiceButtons">
        
        <button className='button-76 buttonCar' id='buttonCar1'>Party</button>
        <button className='button-76 buttonCar' id='buttonCar2'>Relax</button>
        <button className='button-76 buttonCar' id='buttonCar3'>Adventure</button>
        
     </div>
     </div>

     <div className="custom-shape-divider-top-1713938579">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
    </svg>
</div>
     </div>
    )
}


export default Team;
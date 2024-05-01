import { useState, useEffect } from 'react'




function ExplanationPresentation() {

    const [svgList, setSvgList] = useState({
        party: ['', '', ''],
        relax: ['', '', ''],
        explore: ['', '', '']
    })
    
    const [choice, setChoice] = useState(0);

    useEffect(() => {
        const importedSVG = async () => {
            
            const partySVGs = [];
            const relaxSVGs = [];
            const exploreSVGs = [];
            for(let i = 0; i < 3; i++) {
                const partySVG = await import(`/svg_GoldenTrip/Party/party${i}.svg`);
                const relaxSVG = await import(`/svg_GoldenTrip/Relax/relax${i}.svg`);
                const exploreSVG = await import(`/svg_GoldenTrip/Explore/explore${i}.svg`);
                
                partySVGs.push(partySVG.default);
                relaxSVGs.push(relaxSVG.default);
                exploreSVGs.push(exploreSVG.default);
            }
            setSvgList(prevList => ({
                party: partySVGs,
                relax: relaxSVGs,
                explore: exploreSVGs
            }));
        
  
        } 
        importedSVG();
    }, [])

    useEffect(() => {
       const key = setInterval(() => {
            if(choice == 2) {
                setChoice(0);
            }
            else {
                setChoice(prev => prev + 1);
            }
        }, 3000);   

        return () => {
            clearInterval(key);
        }
        
    }, [choice]);

    function EmojiImage({order, choix}) {
    let src;
        if(choix == 0) {
            switch(order){
                case 0:
                    src = svgList.party[0];
                    break;
                case 1:
                    src = svgList.party[1];
                    break;
                case 2: 
                    src = svgList.party[2];
                    break;
                default:
                    break;
            }
        }
        else if(choix == 1) {
            switch(order){
                case 0:
                    src = svgList.relax[0];
                    break;
                case 1:
                    src = svgList.relax[1];
                    break;
                case 2: 
                    src = svgList.relax[2];
                    break;
                default:
                    break;
        }
        }
        else {
            switch(order){
                case 0:
                    src = svgList.explore[0];
                    break;
                case 1:
                    src = svgList.explore[1];
                    break;
                case 2: 
                    src = svgList.explore[2];
                    break;
                default:
                    break;

        }
    }

       return(
        <img src={src} className='emojiSvg'></img>
       )
        
    }

    const ShowExplanationEmoji = () => {
        return(
            <>
                <div className="explanationSvg">
                    <h2>You tell our team your <br></br> 'style' of trip</h2>
                    <div className="threeSvg">
                        <EmojiImage order={0} choix={choice}/>
                        <EmojiImage order={1} choix={choice}/>
                        <EmojiImage order={2} choix={choice}/>
                    </div>
                </div>
            </>
        )
    }

    const ShowPlanning = () => {
        return(
            <div className="showPlanning">
                <h2>We organise the BEST trip for you</h2>
                <img id='earthSVG' src="../../svg_Earth/earth.svg" alt="Earth" />
            </div>
        )
    }

    const ShowMystery = () => {
        return(
            <div className="showAccomodation">
                <h2>Every day will be a surprise</h2>
                <img height='70px' width='70px' margin='0' id='mysteryBox' src="/svg_Mystery/mystery.png" alt="Mystery" />
            </div>
        )
    }

    const EnjoyTrip = () => {
        return(
         <button className='buttonGold buttonDown' id='buttonExplanationEmoji'>Enjoy the best trip of your life.</button>
        )
    }




    return(

        <div className="explanationPresentation">
            <div className="leftPresentation">
                <div className="textExplanation">
                <h2>What is GoldenTrip ?</h2>
                <p> 
                    Our goal is to create, plan, organise and deliver the <b>best possible travel</b> trip to you, based on your preferences.
                </p>

                <p>
                   You'll be asked to answer some questions in a survey about what is <b>your</b> perfect trip.
                </p>
                <p>
                    The <b id='magicGolden'>Golden Trip</b> magic will operate and a complete trip schedule will be given to you.
                </p>
                <p>
                   An entire programmation that fits you is what you get. Give it a try, it's completely free!
                </p>
                    <button className="buttonGold" id='getInEx'>Give me the prog</button>
                </div>
                
            </div>
            {/* <div className="rightPresentation">
                
                    <ShowExplanationEmoji />
                    <ShowPlanning />
                    <ShowMystery />
                    <EnjoyTrip />
            </div> */}
            
                    <div className="customShapeTwo">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
        </div>
        </div>

    )
}

export default ExplanationPresentation
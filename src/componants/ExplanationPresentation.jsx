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
         <button className='buttonGold buttonDown'>Enjoy the best trip of your life.</button>
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
                    Our team is composed of <b>expert worldwide traveling guides</b>. They know everything about the place they lived, from the most beautiful place to watch a sunset to the best place to party up. <b>Your time will be maximised</b> to
                    assure your to not miss one second of your trip.
                </p>
                <p>
                    You'll be asking to write a survey form to get us to know what you like, where you'd like to go, what you want to eat, you previous travel experience and others questions that will help make you a perfect trip.
                </p>
                <p>
                    If you're a solo-traveler, you'll be mixed with people from all around the world in a group. New friends (and maybe lover ?) are guaranted. If you are with a group, you'll have the choice to be mixed or to stay togheter. 
                </p>
                    <button className="buttonGold" id='getInEx'>Get in</button>
                </div>
                
            </div>
            <div className="rightPresentation">
                
                    <ShowExplanationEmoji />
                    <ShowPlanning />
                    <ShowMystery />
                    <EnjoyTrip />
            </div>
            
                    <div className="custom-shape-divider-bottom-1713855202">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
        </div>
        </div>

    )
}

export default ExplanationPresentation
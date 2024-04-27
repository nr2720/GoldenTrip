import {useState} from 'react';
import videoParty from '/videoParty.mp4';
import videoRelax from '/videoRelax.mp4';
import videoTravel from '/videoTravel.mp4';



function FirstPresentation() {
    const [language, setLanguage] = useState('english');
    const [choose, setChoose] = useState(0);
    const [list, setList] = useState({
        english: ['party', 'relax', 'explore']
    });

    const [video, setVideo] = useState(videoParty);

    //button fct
    function ButtonTrip({name, className, onClick}) {
        return(
            <button
                className={className}
                onClick={() => onClick(name)}
            >
                {name}
            </button>
        )
    }

    //Handle the click and changing de state of the choice
    function handleChoose(option) {
        switch(option) {
            case 'Party':
                setChoose(0);
                setVideo(videoParty);
                break;
            case 'Relax':
                setChoose(1);
                setVideo(videoRelax);
                break;
            case 'Explore':
                setChoose(2);
                setVideo(videoTravel)
                break;
            default:
                break;   
        }
    }



    return(
        <>

        <div className="firstPresentation">
            <div className="overlay">
                <video src={video} id="myVideo" autoPlay loop muted />
            </div>
            <div className="firstPresentationCenter">
               { choose === 0 ? (<h1>The best <b className='partyB'>party</b> trip you'll ever live</h1>) :
                choose === 1 ? (<h1>The most <b className='relaxB'>relaxing</b> trip of your life</h1>) :
                 (<h1>Live an <b className='exploreB'>adventure</b> like never before </h1>)
                }
    
                <div className="tripChooseButtons">
                    <ButtonTrip name='Party' className=' neon-button' onClick={() => handleChoose('Party')}/>
                    <ButtonTrip name='Relax' className='neon-button-blue' onClick={() => handleChoose('Relax')}/>
                    <ButtonTrip name='Explore' className='neon-button-orange' onClick={() => handleChoose('Explore')}/>
                </div>
            </div>
            <div className="custom-shape-divider-bottom-1713854179">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
       </>
   
    )
}

export default FirstPresentation;
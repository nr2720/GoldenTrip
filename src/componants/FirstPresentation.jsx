import {useState} from 'react';
import video from '../../public/VideoTest.mp4'


function FirstPresentation() {
    const [language, setLanguage] = useState('english');
    const [choose, setChoose] = useState(0);
    const [list, setList] = useState({
        english: ['party', 'relax', 'explore']
    });

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
                break;
            case 'Relax':
                setChoose(1);
                break;
            case 'Explore':
                setChoose(2);
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
               { choose === 0 ? (<h1>The best party trip you'll ever live</h1>) :
                choose === 1 ? (<h1>The most relaxing trip of your life</h1>) :
                 (<h1>Live an adventure like never before </h1>)
                }
    
                <div className="tripChooseButtons">
                    <ButtonTrip name='Party' className='tripChooseButton' onClick={() => handleChoose('Party')}/>
                    <ButtonTrip name='Relax' className='tripChooseButton' onClick={() => handleChoose('Relax')}/>
                    <ButtonTrip name='Explore' className='tripChooseButton' onClick={() => handleChoose('Explore')}/>
                </div>
            </div>
            <div class="custom-shape-divider-bottom-1713854179">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
       </>
   
    )
}

export default FirstPresentation;
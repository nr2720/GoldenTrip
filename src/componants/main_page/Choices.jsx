import { useState, useEffect } from 'react';






function Choices({grow}) {

    const initials = [
['./takeTheSurvey1.gif', 'smallChoice', 'Take the survey', 'We really want to know everything about your preferences regarding the travel you want to make! Tell us everything!'],['./MakeYourSchedule.gif','smallChoice', 'We build your schedule', 'The magic operate, we get informations from everywhere on the globe, mix them togheter, analyze it and build a PDF document.'],['/GetYourSchedule.png','smallChoice', 'Enjoy your experience', 'In a matter of seconds, you get the schedule. You can either just look at it for inspiration, or follow it meticulously. Enjoy']
    ]
    const [choiceList, setChoiceList] = useState(initials)
    const ImgChoice = ({src, className, name, text, isRed}) => {
        return(
            isRed ? (
            <div 
            className='redChoiceDiv choiceDiv' data-value={name}>
                <img className={className} src={src}></img>
                <h2 className='nonClick'>{name}</h2>
                <p className='nonClick'>{text}</p>
            </div> 
            ) : (
            <div 
            className='choiceDiv' data-value={name}>
                <img className={className} src={src}></img>
                <h2 className='nonClick'>{name}</h2>
                <p className='nonClick'>{text}</p>
            </div> 
            )
        )
    }


    
    return(
    <div className="choiceSection">
        <div className="choicesDiv">
        {choiceList.map((choice, i) => (
            <ImgChoice 
                src={choice[0]} 
                className={choice[1]}
                name={choice[2]}
                text={choice[3]}
                key={choice[2]}
                isRed={grow}
            />
        ))}
            
        </div>
    </div>
    )
}

export default Choices;
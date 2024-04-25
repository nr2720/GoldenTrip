import { useState, useEffect } from 'react';






function Choices() {

    const initials = [
['../../Images_Choices/party.jpg', 'smallChoice', 'Party', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, qui reiciendis repudiandae nobis dolor fugiat quisquam, accusamus sed illo quod recusandae temporibus aspernatur, ut perspiciatis excepturi eos provident ducimus molestias'],['../../Images_Choices/relax.jpg','smallChoice', 'Relax', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, qui reiciendis repudiandae nobis dolor fugiat quisquam, accusamus sed illo quod recusandae temporibus aspernatur, ut perspiciatis excepturi eos provident ducimus molestias'],['../../Images_Choices/explore.jpg','smallChoice', 'Explore', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, qui reiciendis repudiandae nobis dolor fugiat quisquam, accusamus sed illo quod recusandae temporibus aspernatur, ut perspiciatis excepturi eos provident ducimus molestias']
    ]
   
    const [choiceList, setChoiceList] = useState(initials)
    const [choiceNumber, setChoiceNumber] = useState(2);
    const [clickedChoice, setClickedChoice] = useState('');


const handleClick = (e) => {
    setClickedChoice(e.target.dataset.value);
}  

useEffect(() => {
    const choice = clickedChoice;
    switch(choice) {
        case 'Party':
            setChoiceNumber(0);
            break;
        case 'Relax':
            setChoiceNumber(1);
            break;
        case 'Explore':
            setChoiceNumber(2);
            break;
        default:
            break;
    }
}, [clickedChoice])

useEffect(() => {
    if(choiceNumber === 0) {
        setChoiceList([initials[2], initials[0], initials[1]]);
    }
    else if(choiceNumber === 1) {
       setChoiceList([initials[0], initials[1], initials[2]]);
    }
    else if(choiceNumber === 2) {
        setChoiceList([initials[1], initials[2], initials[0]]);
    }
    else {
        return;
    }
    
}, [choiceNumber])








    const ImgChoice = ({src, className, name, text, onClick}) => {
        return(
            <div className='choiceDiv' data-value={name} onClick={onClick}>
                <img className={className} src={src}></img>
                <h2 className='nonClick'>{name}</h2>
                <p className='nonClick'>{text}</p>
            </div>
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
                onClick={handleClick}
            />
        ))}
            
        </div>
    </div>
    )
}

export default Choices;
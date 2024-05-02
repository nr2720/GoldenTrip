import { useState, useEffect } from 'react'




function ExplanationPresentation() {

 

    return(

        <div className="explanationPresentation">
            <div className="leftPresentation">
                <div className="textExplanation">
                <h2>Flash what ?</h2>
                <p> 
                    Our goal is to create, plan, organise and deliver the <b>best possible travel</b> trip to you, based on your preferences.
                </p>

                <p>
                   You'll be asked to answer some questions in a survey about what is <b>your</b> perfect trip.
                </p>
                <p>
                    The <b id='magicGolden'>Flash Trip</b> magic will operate and a complete trip schedule will be given to you.
                </p>
                <p>
                   An entire programmation that fits you is what you get. Give it a try, it's completely free!
                </p>
                    <button className="buttonGold" id='getInEx'>Try it</button>
                </div>
                
            </div>

            
                    <div className="customShapeTwo">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
        </div>
        </div>

    )
}

export default ExplanationPresentation
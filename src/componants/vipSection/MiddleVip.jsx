import Options from "./Options";

const MiddleVip = () => {
    return(
        <div className="optionsVipDiv">
            <Options img='/Img.svg' title='Basic Vip' text='Get a complete organised trip of two weeks, based on your preferences. Our personnal guides will accompagn you, making you discover the most insane places. Food, drinks, hotel, we handle everything.' price='3000' id='basicVip' />
            <Options img='/Img.svg' title='Golden Vip' text='Take the experience to a next level. Let us bring you to the best hotels, fanciest restaurents and best activities. Access activities with VIP pass. Also, access all the advantage of Basic VIP trip.' price='10 000' id='goldenVip' />
            <Options img='/Img.svg' title='Royal' text='Live the best trip of your entire life. For two weeks, let us make you live the most Royal experience. Also, access all the advantages of Basic and Golden VIP Lorem ipsum del lorem ipsum de la nr eka dj m' price='20 000' id='royalVip' />
        </div>    
    )

}

export default MiddleVip;
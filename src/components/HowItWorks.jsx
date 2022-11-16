import React from 'react';
// import '../styles/App.css'
import Work from './Work'

const HowItWorks = () => {
    return (
        <>
        <h1 className="title_works">How it <span>works</span></h1>
        <div className = "icons_works row">
            
                <Work id={1} text={" The real estate developer adds the land into our escrow."}/>
                <Work id={2} text={" We issue tokens that represent an investment in the development."}/>
                <Work id={3} text={" Real Estate developer uses the funds to construct the property."}/>
                <Work id={4} text={"Sales are distributed to token holders in the forms of USDT."}/>

        </div>
        </>
    );
};

export default HowItWorks;
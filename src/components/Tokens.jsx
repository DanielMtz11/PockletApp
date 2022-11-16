import React from 'react';
import Token from './Token';

const Tokens = () => {
    return (
        <div>
            
            <section className="tokens">
                <div className="text_tokens">
                    <h1 className="title_tokens">Tokens backed by real estate <span>developments.</span></h1>
                    <p >
                        We legally bind the legal world with the blockchain technology by issuing tokens that represent investment rights of real estate developments.
                    </p>
                    <h4 className="tokens_subtitle">
                        This is why <span>you should invest.</span>
                    </h4>
                </div>

                <Token title={"title_token"} text={"Anyone can invest the desired amount to become trustee and field profits from the sale of these properties."} img={"https://carlosvargasart.com/Joss/PockeletFigma/image/icon1-01.png"}/>
                <Token title={"Sell at any time"} text={"Without the need to follow lengthy procedures using secondary markets."} img={"https://carlosvargasart.com/Joss/PockeletFigma/image/icon2-01.png"}/>

                <Token title={"Guaranteed Apy"} text={"We take the risk so that you don't have to…in case the project remains uncomplete we'll pay your yield"} img={"https://carlosvargasart.com/Joss/PockeletFigma/image/icon3-01.png"}/>
                <Token title={"Legally Issued"} text={"Tokens are issued following the legal procedures applicable to the country of jurisdiction."}  img={"https://carlosvargasart.com/Joss/PockeletFigma/image/icon4-01.png"}/>
                
                
            </section>
        </div>
    );
};

export default Tokens;
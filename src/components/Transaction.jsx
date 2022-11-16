import React from 'react';

const Transaction = () => {
    return (
        <>
            <section className="transaction ">
                <div className="transaction_text">
                    <h1 className="title_trasaction">0%</h1>
                    <h2 className="subititle_transaction">Transaction fees</h2>
                    <p className="text_transaction">You can invest in any Real Estate development without paying any fee.</p>
                    <div className="transaction_button">
                        <a className="button" href="html/investing.html"> Start my development</a>
                    </div>
                </div>
                <div className="image_transaction">
                    {/* <img className="transaction" src="image/home2.svg" alt=""> */}
                    <img className='transaction' src="https://carlosvargasart.com/Joss/PockeletFigma/image/home2.svg" alt="" />

                </div>

            </section>   
        </>
    );
};

export default Transaction;
import React from 'react';

const Companies = () => {
    return (
        <>
                <div className="companies mt-5 py-5">
                    <h4 className="title_companies">Trusted by</h4>
                    <div className="swiper swiper1 mySwiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                            <div className="swiper-slide">
                                <div className="section-image boxgray mx-auto mx-auto">
                                    <img className='image_company' src="https://carlosvargasart.com/Joss/PockeletFigma/image/ethereum.png" alt="" />
                                    <img src="https://carlosvargasart.com/Joss/PockeletFigma/image/polygon.png" className='image_company' alt="" />
                                </div>
                            </div>
                                <div className="section-image boxgray mx-auto mx-auto">
                                    <img src="https://carlosvargasart.com/Joss/PockeletFigma/image/avalabs.png" className='image_company' alt="" />
                                    <img src="https://carlosvargasart.com/Joss/PockeletFigma/image/realestate.png"  className='image_company'alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div> 
        </>
    );
};

export default Companies;
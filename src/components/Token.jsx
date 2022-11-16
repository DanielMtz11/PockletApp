import React from 'react';



    const Token = ({title,text,img}) => {
        return (
            <>
                <div className="token flexibility">
                    <div className="token_info">
                        <h2 className="title_token">{title}</h2>
                        <p className="text_token">{text}</p>
                    </div>
                    
                    <div className="image-token">
                        <img className='token_image' src={img} alt="" />
                    </div>

                </div>

        </>
    );
};

export default Token;
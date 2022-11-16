import React from 'react';

const Work = ({id, text}) => {

    const returnNum=(id)=>{
        switch(id){
            case 1:
                return("bi-1-circle");
            case 2:
                return("bi-2-circle");              
            case 3:
                return("bi-3-circle");
            case 4:
                return("bi-4-circle");
            
            default:
                return "";
            
        }
    }

    const returnIcon=()=>{
        switch(id){
            case 1:
                return "bi-geo-alt";
            case 2:
                return "bi-file-text";
            case 3:
                return "bi-building";
            case 4:
                return " bi-currency-dollar";
                
            default:
                return "";
        }
        
    }


    return (
        <>
            <div className="works-info work1 col-xs-12 col-sm-6 col-md-3">
                    <div className="work_image">
                        <i className={`workimg bi ${returnIcon(id)} `}></i>
                    </div>
                        <p className="text_work"><i className={`${returnNum(id)} work_icon bi `}></i>{ text}</p>
            </div>
        </>
    );
};

export default Work;
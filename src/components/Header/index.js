import React from "react";


const Header =(props)=>{
    const getSelectedTitle = (value) =>{
        props.selectedTitletoHeader(value);
    }
    
    return(
            <div  className="header">
HEADER
            </div>

    )
}
  

export default Header;
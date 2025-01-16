import React from "react";
const Header = () => {
    return (
      <div className="header">
        <img src={`${process.env.PUBLIC_URL}/assets/images/TrimbleConnectLogo.svg`} alt="Trimble Connect" />
      </div>
    );
  };
  
export default Header;

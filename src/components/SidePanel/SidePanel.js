import React from 'react';
import logo from '../../img/icons/logo-lofttaxi.png';
import logoText from '../../img/icons/logo-text-lofttaxi.png';

class SidePanel extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="left-col">
          <div className="logo sidepanel__logo">
            <img src = { logo } alt="logo lofttaxi" className="logo-img"/>
            <img src = { logoText } alt="text lofttaxi" className="logo-text"/>
          </div>
        </div>
        <div className="right-col"></div>
      </div>
    );
  };
}

export { SidePanel };
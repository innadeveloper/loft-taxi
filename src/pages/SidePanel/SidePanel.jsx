import React from 'react';
import '../../styles/sidepanel.css';
import StartForm from '../../components/StartForm/StartForm';
import StartLogo from '../../components/StartLogo/Startlogo';
import { widthAuth } from '../../components/AuthContext/AuthContext';

import PropTypes from "prop-types";

class SidePanel extends React.Component {  
  static propTypes = {
    onSubmit: PropTypes.func    
  }
    render() {

      return <div className="start-page">
          <section className="start-logo-section" >
            <StartLogo />
          </section>
          <section className="reg-login-section">
              { <StartForm onSubmit={this.props.onSubmit} />}
          </section>
        </div>
    };
}

export default widthAuth(SidePanel);

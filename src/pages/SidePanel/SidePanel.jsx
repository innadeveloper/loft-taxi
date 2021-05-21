import React from 'react';
import '../../styles/sidepanel.css';
import StartFormWithConnect from '../../components/StartForm';
import StartLogo from '../../components/StartLogo/Startlogo';
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
              { <StartFormWithConnect onSubmit={this.props.onSubmit} />}
          </section>
        </div>
    };
}

export { SidePanel };

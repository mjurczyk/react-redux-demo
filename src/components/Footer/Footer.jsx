import React, { PropTypes } from 'react';

import './Footer.less';

const Footer = ({ label }) => {
  return <div className="footer">
      <div className="footer__inner">
      <span>
        {label}
      </span>
      <span>
        @twitter
      </span>
      <span>
        @facebook
      </span>
    </div>
  </div>;
};

Footer.propTypes = {
  label: PropTypes.string.isRequired
};

export default Footer;
import React from 'react';
import { connect } from 'react-redux';

import Footer from '../components/Footer/Footer';

const FOOTER_LABEL = 'getoffice.io';
const mapStateToProps = (state, props) => {
  return {
    label: FOOTER_LABEL
  };
};

export default connect(mapStateToProps, null)(Footer);
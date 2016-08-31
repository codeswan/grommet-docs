// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
// import Article from 'grommet/components/Article';
// import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import { announcePageLoaded } from 'grommet/utils/Announcer';
// import DocsFooter from './DocsFooter';

const DEFAULT_TITLE = 'Grommet';

export default class DocsArticle extends Component {

  componentDidMount () {
    if (this.props.title) {
      document.title = `${this.props.title} | Grommet`;
    } else {
      document.title = DEFAULT_TITLE;
    }
    announcePageLoaded(this.props.title || DEFAULT_TITLE);
  }

  render () {
    const { full } = this.props;
    let pad;
    if (! full) {
      pad = {horizontal: 'large'};
    }
    return (
      <Box pad={pad}>
        {this.props.children}
      </Box>
    );
  }
};

DocsArticle.propTypes = {
  colorIndex: PropTypes.string,
  full: PropTypes.bool,
  title: PropTypes.string.isRequired
};

DocsArticle.defaultProps = {
  colorIndex: 'neutral-1'
};

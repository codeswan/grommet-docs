// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
// import NavAnchor from '../../components/NavAnchor';
// import Example from '../Example';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import Search from 'grommet/components/Search';
import Title from 'grommet/components/Title';
// import ActionsLogo from 'grommet/components/icons/base/Actions';
// import NotificationIcon from 'grommet/components/icons/base/Notification';
// import UserSettingsIcon from 'grommet/components/icons/base/UserSettings';
// import Logo from '../../img/Logo';

Header.displayName = 'Header';
Title.displayName = 'Title';
Search.displayName = 'Search';
Menu.displayName = 'Menu';
Anchor.displayName = 'Anchor';
Button.displayName = 'Button';

export default class HeaderDoc extends Component {

  render () {
    return (
      <DocsArticle title="Header" colorIndex="neutral-3">

        <section>
          <p>Combines Title and Menu elements responsively.</p>
          <Header justify="between">
            <Title>Title</Title>
            <Menu direction="row" justify="end" inline={true}>
              <Anchor href="#" className="active">First</Anchor>
              <Anchor href="#">Second</Anchor>
              <Anchor href="#">Third</Anchor>
            </Menu>
          </Header>
        </section>

      </DocsArticle>
    );
  }
};

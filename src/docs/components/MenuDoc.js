// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';
// import Example from '../Example';
import Menu from 'grommet/components/Menu';
// import ConfigIcon from 'grommet/components/icons/base/Configuration';
// import FilterIcon from 'grommet/components/icons/base/Filter';
import CheckBox from 'grommet/components/CheckBox';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';

Menu.displayName = 'Menu';
CheckBox.displayName = 'CheckBox';
Anchor.displayName = 'Anchor';
Button.displayName = 'Button';

export default class MenuDoc extends Component {

  _onClick () {
    // no-op
  }

  render () {
    return (
      <DocsArticle title="Menu" colorIndex="neutral-3">

        <section>
          <p>Presents a list of choices responsively.</p>
          <Menu label="Label" direction="row" justify="end" inline={true}>
            <Anchor href="#" className="active">First</Anchor>
            <Anchor href="#">Second</Anchor>
            <Anchor href="#">Third</Anchor>
          </Menu>
        </section>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>closeOnClick  true|false</code></dt>
            <dd>Indicates whether the opened menu drop down should close
            when clicked. Defaults to true.</dd>
            <dt><code>inline        true|false</code></dt>
            <dd>Indicates whether the menu should be shown inline or
              a control shown to open it in a drop down. If false,
              the specified label or icon will be shown, if neither are
              specified, a default icon will be shown.</dd>
            <dt><code>dropAlign     {"{left: left|right, " +
              "right: left|right, top: top|bottom, " +
              "bottom: top|bottom}"}</code></dt>
            <dd>Where to place the drop down. The keys correspond to a side
              of the drop down. The values correspond to a side of the control.
              For instance, <code>{"{left: 'left', top: 'bottom'}"}</code>
              would align the left edges and the top of the drop down to the
              bottom of the control.
              At most one of left or right and one of top or bottom should be
              specified.
            </dd>
            <dt><code>icon          {"{element}"}</code></dt>
            <dd>Indicates that the menu should be collapsed and the
              icon shown as a control top open it.</dd>
            <dt><code>label         {"{string}"}</code></dt>
            <dd>Indicates that the menu should be collapsed and the
              label shown as a control top open it.</dd>
            <dt><code>responsive    true|false</code></dt>
            <dd>Whether an inline menu should be automatically switched
              to a control + drop down when the window size is reduced.</dd>
            <dt><code>size          small|medium|large</code></dt>
            <dd>The size of the Menu. Defaults to <code>medium</code>.</dd>
          </dl>
          <p>Options for <NavAnchor path="/docs/box">Box</NavAnchor> are
          also available.</p>
        </section>

      </DocsArticle>
    );
  }
};

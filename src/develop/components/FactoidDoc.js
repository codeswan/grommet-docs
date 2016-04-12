// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var Link = require('react-router').Link;
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');
var Factoid = require('grommet/components/Factoid');
var AssistantIcon = require('grommet/components/icons/base/Assistant');
var AchievementIcon = require('grommet/components/icons/base/Achievement');
var LinkUpIcon = require('grommet/components/icons/base/LinkUp');

Factoid.displayName = 'Factoid';

var inline =
      "<Factoid />";

var FactoidDoc = React.createClass({

  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  _renderCode(name, jsx) {
    return (
      <div>
        <h3>{name}</h3>
        <div className="example">
          {jsx}
        </div>
        <pre><code className="html hljs xml">
          {jsxToString(jsx)}
        </code></pre>
      </div>
    );
  },

  render: function() {
    var simpleFactoid = (
      <Factoid text="10,000" caption="Sample Factoid" />
    );

    var smallFactoid = (
      <Factoid size="small" iconBefore={<AssistantIcon />} text="100%" iconAfter={<AchievementIcon />} caption="Teeny tiny Factoid with icons" />
    );

    var bigFactoid = (
      <Factoid size="large" text="1000%" iconAfter={<LinkUpIcon />} caption="Huge Factoid" />
    );

    return (
      <DocsArticle title="Factoid" colorIndex="neutral-3">

        <p>Data represented by a very large number.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>size            small|medium|large</code></dt>
            <dd>The size of the Factoid. Defaults to <code>medium</code>.</dd>
            <dt><code>text            string</code></dt>
            <dd>The very large number.  This parameter is required</dd>
            <dt><code>iconBefore      string</code></dt>
            <dd>Name of the icon to go before the text.  See <Link to={this.context.routePrefix + "icon"}>Icon</Link> for available options.  This parameter is optional.</dd>
            <dt><code>iconAfter       string</code></dt>
            <dd>Name of the icon to go after the text.  See <Link to={this.context.routePrefix + "icon"}>Icon</Link> for available options.  This parameter is optional.</dd>
            <dt><code>caption         string</code></dt>
            <dd>Caption for the factoid.  Optional.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderCode('Default', simpleFactoid)}
          {this._renderCode('Small, with icons', smallFactoid)}
          {this._renderCode('Large', bigFactoid)}
        </section>

      </DocsArticle>
    );
  }
});

module.exports = FactoidDoc;

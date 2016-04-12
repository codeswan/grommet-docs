// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var Link = require('react-router').Link;
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');
var Factoid = require('grommet/components/Factoid');

Factoid.displayName = 'Factoid';

var inline =
      "<Factoid />";

var FactoidDoc = React.createClass({
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
      <Factoid data="10,000" caption="Sample Factoid" />
    );

    var smallFactoid = (
      <Factoid size="small" iconBefore="Assistant" data="100%" iconAfter="Achievement" caption="Teeny tiny Factoid with icons" />
    );

    var bigFactoid = (
      <Factoid size="large" data="1000%" iconAfter="LinkUp" caption="Huge Factoid" />
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
            <dt><code>data            string</code></dt>
            <dd>The very large number.  This parameter is required</dd>
            <dt><code>iconBefore      string</code></dt>
            <dd>Name of the icon to go before the data.  See <Link to={this.context.routePrefix + "icon"}>Icon</Link> for available options.  This parameter is optional.</dd>
            <dt><code>iconAfter       string</code></dt>
            <dd>Name of the icon to go after the data.  See <Link to={this.context.routePrefix + "icon"}>Icon</Link> for available options.  This parameter is optional.</dd>
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

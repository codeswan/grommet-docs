// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var DocsArticle = require('../../DocsArticle');
var Bricks = require('grommet/components/Bricks');
var Brick = require('grommet/components/Brick');

var BrickDoc = React.createClass({

  _onClick: function () {
    // No-op
  },

  render: function() {
    var inline =
      "<Bricks>\n" +
      "  <Brick>\n" +
      "    <Header>\n" +
      "      ...\n" +
      "    </Header>\n" +
      "    ...\n" +
      "    <Footer>\n" +
      "      ...\n" +
      "    </Footer>\n" +
      "  </Brick>\n" +
      "  ...\n" +
      "</Bricks>";

    return (
      <DocsArticle title="Brick(s)" colorIndex="neutral-3">

        <p>Lay out equivalently sized Bricks of content.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Brick Options</h2>
          <dl>
            <dt><code>label        string</code></dt>
            <dd>The label of the Brick.</dd>
          </dl>
          <dl>
            <dt><code>route        {"{location}"}</code></dt>
            <dd>The route that the Brick should link to.</dd>
          </dl>
          <dl>
            <dt><code>width        1|2</code></dt>
            <dd>The width of the Brick.  Defaults to <code>1</code>.</dd>
          </dl>
          <dl>
            <dt><code>height        1|2</code></dt>
            <dd>The height of the Brick.  Defaults to <code>1</code>.</dd>
          </dl>
          <dl>
            <dt><code>colorIndex        {"{category}-{index}"}</code></dt>
            <dd>The color identifier to use for the background color of the Brick.  For example: <code>"neutral-1"</code></dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <p>These examples show a variety of different options for the Bricks.</p>

          <h3>Simple</h3>
          <div className="example">
            <Bricks>
              <Brick label="First"/>
              <Brick label="Second" />
              <Brick label="Third" />
            </Bricks>
          </div>
          <pre><code className="html hljs xml">
            {"<Bricks>\n  <Brick label='First' />\n  ...\n</Bricks>"}
          </code></pre>

        </section>

      </DocsArticle>
    );
  }
});

module.exports = BrickDoc;
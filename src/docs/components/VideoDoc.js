// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';
import Video from 'grommet/components/Video';

export default class VideoDoc extends Component {

  constructor () {
    super();
    this._onSingleSelect = this._onSingleSelect.bind(this);
    this._onMultipleSelect = this._onMultipleSelect.bind(this);
    this.state = { singleSelection: [0] };
  }

  // single selection is managed by the caller via state.singleSelection
  _onSingleSelect (selection) {
    this.setState({singleSelection: selection});
  }

  // multiple selection is managed by the Table
  _onMultipleSelect (selection) {
    // no-op
  }

  render () {

    return (
      <DocsArticle title="Video" colorIndex="neutral-3">

        <p>Video built on HTML5 video element. Callers must include
          child <code>&lt;source&gt;</code>elements according to the
          HTML5 <code>&lt;video&gt;</code> specification.</p>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>allowFullScreen   true|false</code></dt>
            <dd>Enables fullscreen/expand control button on player.</dd>
            <dt><code>autoPlay          true|false</code></dt>
            <dd>Enables automatic playback of the video as soon as it is
              loaded. Defaults to <code>false</code>.</dd>
            <dt><code>colorIndex        {"{category}-{index}"}</code></dt>
            <dd>The color identifier to use for the background color.
              For example: <code>"neutral-1"</code>. This is visible when a
              poster image is not the same aspect ratio as the video.</dd>
            <dt><code>full              true|false</code></dt>
            <dd>Whether the width should take the full container width.</dd>
            <dt><code>loop              true|false</code></dt>
            <dd>Enables continuous video looping. Defaults
              to <code>false</code>.</dd>
            <dt><code>muted             true|false</code></dt>
            <dd>Enables video muting. This option is best used with
              the <code>autoPlay</code> flag. Defaults
              to <code>false</code>.</dd>
            <dt><code>poster            {"{string}"}</code></dt>
            <dd>Poster image to show before the video first plays.</dd>
            <dt><code>size              small|medium|large</code></dt>
            <dd>The width of the Video. Defaults to <code>medium</code> unless
              the <code>full</code> option is specified.
              The height will adapt to the aspect ratio of the video.</dd>
            <dt><code>showControls      true|false</code></dt>
            <dd>Show controls such as play button, progress bar, etc. on
              top of video. Defaults to <code>true</code>.</dd>
            <dt><code>title             {"{string}|{node}"}</code></dt>
            <dd>Descriptive title.</dd>
            <dt><code>shareLink         {"{string}"}</code></dt>
            <dd>Link to be used for social media sharing. Shown at the end of the video.</dd>
            <dt><code>shareHeadline     {"{string}"}</code></dt>
            <dd>Headline to be used for social media sharing.</dd>
            <dt><code>shareText         {"{string}"}</code></dt>
            <dd>Text to be used for social media sharing.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Simple" code={
            <Video>
              <source src="/video/test.mp4" type='video/mp4'/>
            </Video>
          } />

          <Example name="Replay with Share Menu" code={
            <Video title="HPE Video"
              shareLink="http://grommet.io"
              shareText="Website for Grommet UX Framework">
              <source src="/video/test.mp4" type='video/mp4'/>
            </Video>
          } />

          <Example name="Title, Poster, Full" code={
            <Video title="Title" poster="/img/mobile_first.jpg" full={true}>
              <source src="/video/test.mp4" type="video/mp4"/>
            </Video>
          } />

          <Example name="Small" code={
            <Video size="small">
              <source src="/video/test.mp4" type="video/mp4"/>
            </Video>
          } />

          <Example name="Large" code={
            <Video size="large">
              <source src="/video/test.mp4" type="video/mp4"/>
            </Video>
          } />

        </section>

      </DocsArticle>
    );
  }
};

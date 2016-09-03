import React, { Component, PropTypes } from 'react';
import marked from 'marked';
import highlight from 'highlight.js'

import 'highlight.js/styles/atom-one-dark.css';
import './PostContent.css';

marked.setOptions({
  highlight: (code) => {
    return require('highlight.js').highlightAuto(code).value;
  }
});

export default class PostContent extends Component {

  static propTypes = {
    post: PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      publishDate: PropTypes.instanceOf(Date).isRequired,
    }).isRequired
  }

  constructor(props) {
    super(props);

    this.renderer = new marked.Renderer();

    this.renderer.code = function (code, language) {
      const highlightedCode = highlight.highlightAuto(code).value;
      return `<code class='hljs ${language}'>${highlightedCode}</code>`;
    }
  }

  rawMarkup() {
    return {
       __html:  marked(this.props.post.content,
         {
           renderer: this.renderer,
           gfm: true
         })
    };
  }

  render() {

    return (
      <section className="post-content" dangerouslySetInnerHTML={this.rawMarkup()}></section>
    )
  }
}

import React, { Component, PropTypes } from 'react';

export default class PostsListPage extends Component {

  render() {
    const posts = [];
    for (var i = 0; i < 20; i++) {
      posts.push(
        <div className="card horizontal">
          <div className="card-image">
            <img src="http://lorempixel.com/100/190/nature/10" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        {posts}
      </div>
    );
  }
}

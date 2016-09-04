import React from 'react';

export default function Footer() {
  return (
    <footer className="page-footer teal darken-2">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">GitHub</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">LinkedIn</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">RSS Feed</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Itay Waisman
          <a href="#top" className="grey-text text-lighten-3 right">Back to top of page</a>
        </div>
      </div>
    </footer>
  );
}

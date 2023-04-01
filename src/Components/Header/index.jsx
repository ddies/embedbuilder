import React from "react";

export default class Header extends React.PureComponent {
  render = () => (
    <header>
      <div id="back-to-home">
        <a href="https://ddies.github.io">&larr;</a>
      </div>
      <div title="ddies.github.io">ddies.github.io</div>
    </header>
  );
}

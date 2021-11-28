import React from "react";

class Navbar extends React.Component {
  render() {
    const { name, score } = this.props;
    return (
      <div className="navbar">
        <div className="game-title">Memory Game</div>
      <div className="name">Good Luck: {name}</div>
      <div className="score">Level: {score}</div>
      </div>
    );
  }
}

export default Navbar;

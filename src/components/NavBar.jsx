import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <div class="navbar">
        <h3>Features</h3>
        <ul>
          <li>
            <div class="list-item">
                <p>Feature 1</p>
            </div>
          </li>
          <li>
            <div class="list-item">
                <p>Feature 2</p>
            </div>
          </li>
          <li>
            <div class="list-item">
                <p>Feature 3</p>
            </div>
          </li>
          <li>
            <div class="list-item">
                <p>Feature 4</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
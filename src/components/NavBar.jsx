import React from "react";
import data from '../data/features.json';

class NavBar extends React.Component {
  render() {
    return (
      <div class="navbar">
        <h3>Features</h3>
        <ul>
          {data.content.map((feature) => {
            return (
              <li>
                <div class="list-item">
                    <p><a href={`#${feature.id}`}>{feature.heading}</a></p>
                </div>
              </li>
            )
          }
          )}
        </ul>
      </div>
    );
  }
}

export default NavBar;
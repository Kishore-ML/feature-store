import React from "react";
import data from '../data/features.json';

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <h3>Features</h3>
        <ul>
          {data.features.map((feature) => {
            return (
              <li key={feature.id}>
                <div className="list-item">
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
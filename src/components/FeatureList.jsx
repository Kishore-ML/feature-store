import react from 'react';
import Content from './Content';
import data from '../data/features.json';
class FeatureList extends react.Component {

  constructor(props) {
    super(props);
    this.state = {
    features: data.features,
    }
}
  render() {
    return (
      <div class="content-container">
          {this.state.features && this.state.features.length>0 &&
          (this.state.features.map((feature) => {
              return (
                  <Content feature={feature} key={feature.id} />
                )
          }))}
      </div>
    );  
  }
}

export default FeatureList;

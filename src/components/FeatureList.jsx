import react from 'react';
import Content from './Content';
import data from '../data/features.json';
class FeatureList extends react.Component {

  constructor(props) {
    super(props);
    this.state = {
    content: data.content,
    }
}
  render() {
    return (
      <div class="content-container">
          {this.state.content.map((content) => {
              return (
                  <Content 
                    id={content.id}
                    heading={content.heading} 
                    description={content.description} 
                    image={content.image} 
                    likes={content.likes}
                  />
                )
          })}
      </div>
    );  
  }
}

export default FeatureList;

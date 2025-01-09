import react from 'react';
import Content from './Content';
class FeatureList extends react.Component {

  constructor(props) {
    super(props);
    this.state = {
    content: [
        {
            heading: 'Heading of the Feature',
            description: 'Welcome to the Trimble Connect for Browser\'s 3D Viewer User Guide. In this guide you will find useful information on using the 3D Viewer in Trimble Connect. You can perform several different tasks while working in the 3D Viewer. Below is a reference guide which shows the icons used in the 3D View and which page you can go to learn more about it.',
            image: '../assests/Sample.png',
            likes: 12
        },
        {
            heading: 'Heading of the Feature',
            description: 'Welcome to the Trimble Connect for Browser\'s 3D Viewer User Guide. In this guide you will find useful information on using the 3D Viewer in Trimble Connect. You can perform several different tasks while working in the 3D Viewer. Below is a reference guide which shows the icons used in the 3D View and which page you can go to learn more about it.',
            image: '../assests/Sample.png',
            likes: 12
        },
        {
          heading: 'Heading of the Feature',
          description: 'Welcome to the Trimble Connect for Browser\'s 3D Viewer User Guide. In this guide you will find useful information on using the 3D Viewer in Trimble Connect. You can perform several different tasks while working in the 3D Viewer. Below is a reference guide which shows the icons used in the 3D View and which page you can go to learn more about it.',
          image: '../assests/Sample.png',
          likes: 12
      },
      {
        heading: 'Heading of the Feature',
        description: 'Welcome to the Trimble Connect for Browser\'s 3D Viewer User Guide. In this guide you will find useful information on using the 3D Viewer in Trimble Connect. You can perform several different tasks while working in the 3D Viewer. Below is a reference guide which shows the icons used in the 3D View and which page you can go to learn more about it.',
        image: '../assests/Sample.png',
        likes: 12
      },
    ]}
}
  render() {
    return (
      <div class="content-container">
          {this.state.content.map((content) => {
              return (
                  <Content heading={content.heading} description={content.description} image={content.image} likes={content.likes}/>
                )
          })}
      </div>
    );  
  }
}

export default FeatureList;

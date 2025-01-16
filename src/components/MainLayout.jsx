import react from 'react';
import Header from './Header';
import NavBar from './NavBar';
import FeatureList from './FeatureList';
class MainLayout extends react.Component {

  render() {
    return (
      <div>
        <Header/>
        <div className="main-container">
            <NavBar/>  
            <FeatureList/>
        </div>
      </div>
    );
  }
}

export default MainLayout;
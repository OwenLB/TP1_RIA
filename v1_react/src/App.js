import React from 'react';

import Container from 'react-bootstrap/Container';
import MyNavbar from './MyNavbar/MyNavbar';
import Products from './Product/Products';

import './App.css';


class App extends React.Component {
  render() {
    return (
      <Container className="p-3">
        <Container className="p-5 mb-4 bg-light rounded-3">
          <MyNavbar />
        </Container>
        <Container className="p-5 mb-4 bg-light rounded-3">
          <Products />
        </Container>
      </Container>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import {fetchImages} from '../action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { InputGroup, InputGroupAddon, Input, Button, Container, Col, Row } from 'reactstrap';


class App extends Component {
  state = {
    image: []
  }

  handleImage = (e) => (this.setState({image: e.target.value}))

  render() {
    return (
      <div className="App">
        <header style={{backgroundColor:'white', margin:'15px'}}>
          <img src='http://www.designthinkingmtl.com/wp-content/uploads/2017/04/Unsplash-Logo.png' className="App-logo" alt="logo" />

        </header>
        <InputGroup className="container">
          <Input type="text" placeholder="search api here" onChange={this.handleImage} value={this.state.image}/>
        </InputGroup>
        <Button color="primary" onClick={() => this.props.fetchImages(this.state.image)}>Submit</Button>
        <Container>
            <Row>
        {this.props.images.map((image, i) => (
          <Col lg='4'>
            <div key={i}><img width="200px" src={image}/></div>
          </Col>
        ))}
        </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    images: state.images,
});


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchImages: fetchImages }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

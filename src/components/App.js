import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import {fetchImages} from '../action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class App extends Component {
  state = {
    image: []
  }

  handleImage = (e) => (this.setState({image: e.target.value}))

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

          <input type="text" placeholder="search api here" onChange={this.handleImage} value={this.state.image}/>
          <button onClick={() => this.props.fetchImages(this.state.image)}>Submit</button>
          {this.props.images.map((image, i) => (
            <div key={i}><img width="200px" src={image}/></div>
          ))}

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

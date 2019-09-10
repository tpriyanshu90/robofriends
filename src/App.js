import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './components/card/Card';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import { setSearchField, getRobotsArr } from './action';

const mapStateToProps = state => {
  console.log("1----------");
  return {
    searchField : state.searchField, //searchField attribute gets added to the props
    robots : state.robots
  }
}
const mapDispatchToProps = dispatch => {
  console.log("2----------"); //this also goes to searchField.
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRobotsChange: (robotsArr) => dispatch(getRobotsArr(robotsArr))
  }      
}

class App extends Component {

  constructor(props){
    super(props);
    console.log("3---constructor-------",this.props);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        this.props.onRobotsChange(users);
    });
    console.log("4-----CDM-----");
  }

  render() {
    var i =1;
    console.log("in render----------", i++, this.props);
    const { robots, searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (!robots.length) {
      return(
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
      );
    }
    else {
      return (
        <div className="App tc">
          {/*<Header/>*/}
          <SearchBox searchChange = {onSearchChange} />

          <ErrorBoundary>
            {filteredRobots.map((robot, i) => {
              return <Card key = {i} username = {robot.username} id = {robot.id} name = {robot.name} email = {robot.email}/>
            })}
          </ErrorBoundary>
          
          
          {/*<Footer/>*/}
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
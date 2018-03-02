import React, { Component } from 'react';
import { voteAngular, voteReact, voteVuejs } from './actions';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.store = this.props.store;
    }

    handleVoteAngular = () => {
        this.store.dispatch( voteAngular() );
    }
    handleVoteReact = () => {
        this.store.dispatch( voteReact() );
    }
    handleVoteVuejs = () => {
        this.store.dispatch( voteVuejs() );
    }
    render() {
        return (
            <div>
                <div className="jumbotron" style={{'textAlign':'center'}}>
                    <h2> What is your favorite front-end framework?</h2>
                    <h3> Vote here:</h3>
                    <div className="row">
                        <div className="col-xs-offset-3 col-xs-2">
                            <img src="angular.png" height="96" alt="Angular pic" onClick={this.handleVoteAngular}></img>
                        </div>
                        <div className="col-xs-2">
                            <img src="react.png" height="96" alt="React pic" onClick={this.handleVoteReact}></img>
                        </div>
                        <div className="col-xs-2">
                            <img src="vuejs.png" height="96" alt="Vue js pic" onClick={this.handleVoteVuejs}></img>
                        </div>
                    </div>
                </div>
            </div>
        );
      }
}

export default App;

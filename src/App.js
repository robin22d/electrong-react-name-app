import React, { Component } from 'react';
import {render} from 'react-dom';
import List from './components/list.js';
import AddContent from './components/addContent.js';

const names = [{ name: 'robin'}, {name: 'james'}];

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            names
        }
    }

    render() {
        return (
            <div className="App">
              
                <AddContent
                    names = {this.state.names}
                    createTask={this.createTask.bind(this)}
                />
                <List
                    names = {this.state.names}
                />
            </div>
        );
    }

    createTask(name) {

        this.state.names.push({
            name
        });
        this.setState({ names: this.state.names });
    }
}

export default App;

render(<App />, document.getElementById('root'));
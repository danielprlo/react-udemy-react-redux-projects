import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    //Same as this.state = {lat: null}; in constructor
    state = {late: null};

    componentDidMount() {
        this.setState({lat: -37.77});
    }

    render() {
    return <SeasonDisplay lat={this.state.lat}/>
    }
}

ReactDom.render(
    <App />,
    document.querySelector("#root")
)
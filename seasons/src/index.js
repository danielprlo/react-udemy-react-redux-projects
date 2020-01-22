import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    //Same as this.state = {lat: null}; in constructor
    state = {lat: null};

    componentDidMount() {
        this.setState({lat: -37.77});
    }

    renderContent() {
        if (this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }
        
        return <Spinner text="Sending some"/>
    }

    render() {
        return (
            <div className="example">{this.renderContent()}</div>
        )
    }
}

ReactDom.render(
    <App />,
    document.querySelector("#root")
)
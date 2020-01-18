import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: 100
        };
    }

    render() {
    return <div>Latitude: {this.state.lat}</div>
    }
}

ReactDom.render(
    <App />,
    document.querySelector("#root")
)
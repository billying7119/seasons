import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {lat: null}

        //放在render裡會導致geolocation反覆被執行
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude});
            },
            (err) => console.log(err)
        );
    }

    render() {
    return <div>latitude: {this.state.lat}</div>
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));

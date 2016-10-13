import React from 'react';
import ReactDOM from 'react-dom';
require('./style.scss');

class Message extends React.Component {
    render(){
        return <div>
            <h1>{this.props.title}</h1>
            <p>{this.props.message}</p>
        </div>
    }
}

ReactDOM.render(<Message title='Hello' message='Hello world!' />,
    document.getElementById('target'));
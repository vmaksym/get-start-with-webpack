import React from 'react';
import ReactDOM from 'react-dom';

class About extends React.Component {
    render(){
        return <div>
            <h1>About us</h1>
        </div>
    }
}

ReactDOM.render(<About />,
    document.getElementById('target'));
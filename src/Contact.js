import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
    render(){
        return <div>
            <h1>Contact us</h1>
        </div>
    }
}

ReactDOM.render(<Contact />,
    document.getElementById('target'));
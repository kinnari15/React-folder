import React, { Component } from 'react';

class New extends Component {
    render() { 
        const{name} = this.props
    return <h1> Astronomy is the best! - {name}</h1> 
    }
}

export default New
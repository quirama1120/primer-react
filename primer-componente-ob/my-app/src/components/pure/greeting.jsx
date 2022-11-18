import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            age: 27
        }
    }

    render() {
        return (
            <div>
                <h1> hola {this.props.name}</h1>
                <h2> tienes {this.state.age} años</h2>
                <div>
                    <button onClick={this.birthday}>
                    Cunplir años
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age +1
            }
    ))
}
}

Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;

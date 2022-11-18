import React, {useState} from 'react';
import PropTypes from 'prop-types';


const FGreeting = (props) => {
const [age, setage] = useState(27);

const birthday = () => {
setage(age +1)
}

    return (
        <div>
            <h1>
                Hola {props.name} desde componente funcional
            </h1>
            <div>
            <h2> Tu edad es {age}</h2>
                <button onClick={birthday}>
                    cumplir años con funcion
                </button>
            </div>
        </div>
    );
};


FGreeting.propTypes = {
name: PropTypes.string,
};


export default FGreeting;

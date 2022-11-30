import React from 'react'
import PropTypes from 'prop-types'
export class ComponentB extends React.Component {
    render() {
      return <h1> {this.props.Conected ? 'Contacto En Línea': 'Contacto No Disponible'}</h1>;
    }
  }

  ComponentB.propTypes = {
    Conected: PropTypes.bool
  }

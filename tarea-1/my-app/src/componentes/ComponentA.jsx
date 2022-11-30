
import React from 'react'
import { ComponentB } from './ComponentB'


export class ComponentA extends React.Component {
    name = 'Christian'
    lastname = 'Quirama'
    Email = 'quirama.11@hotmail.com'
    Conected = true
    
    render() {
        return (
        <ComponentB Conected = {false}/>
    )}
    }


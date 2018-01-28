import React, { Component } from 'react';
import actions from '../store/actions';
import { connect } from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
   /*  state = {
        persons: []
    }

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.concat(newPerson)}
        } );
    }

    personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    } */

    render () {
        return (
            <div>
                <AddPerson 
                personAdded={ () => this.props.actionHandler( actions.ADD_PERSON, Math.random(), 'Max', Math.floor( Math.random() * 40 )) } />

                { this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={ () => this.props.actionHandler( actions.DELETE_PERSON, person.id ) }/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actionHandler: (type, id, name, age) => dispatch({ type, id, name, age })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
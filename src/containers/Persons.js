// import React, { Component } from 'react';

// import Person from '../components/Person/Person';
// import AddPerson from '../components/AddPerson/AddPerson';

// class Persons extends Component {
//     state = {
//         persons: []
//     }

//     personAddedHandler = () => {
//         const newPerson = {
//             id: Math.random(), // not really unique but good enough here!
//             name: 'Max',
//             age: Math.floor( Math.random() * 40 )
//         }
//         this.setState( ( prevState ) => {
//             return { persons: prevState.persons.concat(newPerson)}
//         } );
//     }

//     personDeletedHandler = (personId) => {
//         this.setState( ( prevState ) => {
//             return { persons: prevState.persons.filter(person => person.id !== personId)}
//         } );
//     }

//     render () {
//         return (
//             <div>
//                 <AddPerson personAdded={this.personAddedHandler} />
//                 {this.state.persons.map(person => (
//                     <Person 
//                         key={person.id}
//                         name={person.name} 
//                         age={person.age} 
//                         clicked={() => this.personDeletedHandler(person.id)}/>
//                 ))}
//             </div>
//         );
//     }
// }

// export default Persons;

//---------

import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import {connect}  from 'react-redux'

class Persons extends Component {
    state = {
        persons: []
    }

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        this.props.personAddedHandler(newPerson)
        // this.setState( ( prevState ) => {
        //     return { persons: prevState.persons.concat(newPerson)}
        // } );
    }

    personDeletedHandler = (personId) => {
        // this.setState( ( prevState ) => {
        //     return { persons: prevState.persons.filter(person => person.id !== personId)}
        // } );
        this.props.personDeletedHandler(personId)
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {this.props.persons && this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        persons:state.personData
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        personAddedHandler:(data)=>dispatch({
            type:'ADD_PERSON',
            payload:data
        }),
        personDeletedHandler:(id)=>dispatch({
            type:'DELETE_PERSON',
            id:id
        })
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Persons);
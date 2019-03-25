import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        default:
            return state;
        }
};


export class Provider extends Component{
    state = {
        contacts: [
            {
                id:1,
                name:"Wil Smitt",
                email:"smitt@gmail.com",
                phone:"333-333-33"
            },
            {
                id:2,
                name:"Karen Wan",
                email:"wan@gmail.com",
                phone:"555-555-55"
            },
            {
                id:3,
                name:"Bil Harold",
                email:"harold@gmail.com",
                phone:"222-222-22"
            },
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    };

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
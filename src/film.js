import React from 'react';

let filmNames = ['Abcd', 'Spiderman', 'Batman', 'asdqdwq', 'asdasd'] 

class Film extends React.Component {
    constructor()
    {
        super()
        this.state = {
            name : '',
            year : null,
            genre : '',
            actors : {
                name : '',
                age : null
            }
        }
    }

    showFilmDetails = () => {
    }

    render()
        {
            return (
                <div>x
                    <div>{filmNames}</div>
                    <label onClick={this.showFilmDetails}>Name: {this.state.name}</label>
                </div>
            )
        }
}

export default Film;
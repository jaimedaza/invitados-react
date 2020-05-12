import React, { Component } from 'react';

class App extends Component {

  state = {
    guests: [
     // { name: "jaime", last: "Daza" },
      //{ name: "jane", last: "doe"},    
    ],
    newName: '',
    newLast: '',
    newGuestId: 0,    
  }

  updateGuestName = (event) => {
    this.setState({
      newName: event.target.value      
    });       
  }

  updateGuestLast = (event) => {
    this.setState({
      newLast: event.target.value            
    });     
  }

  addGuest = (event) => {
    event.preventDefault();

    let oldGuests = this.state.guests

    this.setState({
      guests: [...oldGuests, {
        id: this.state.newGuestId,        
        name: this.state.newName,
        last: this.state.newLast
      }],
      newName: '', 
      newLast: '',
      newGuestId: this.state.newGuestId + 1       
    }) 

    console.log("envio formulario");
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.addGuest}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" name="first-name" onChange={this.updateGuestName} value={this.state.newName} />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" name="last-name" onChange={this.updateGuestLast} value={this.state.newLast} />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {this.state.guests.map((guest, index) => <tr key={guest.id}><td>{guest.name}</td><td>{guest.last}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App



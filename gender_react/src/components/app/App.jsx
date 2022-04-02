import { Component } from 'react';

import Form from '../form/Form';
import Info from '../info/Info';
import Network from '../../network/Network';

import './app.scss';

class App extends Component {
  state = {
    name: '',
    data: {},
    loaded: false,
    error: false,
  }

  network = new Network();

  onChangeName = (name) => {
    this.setState({ name });
  }

  onRequest = () => {
    this.network
      .getInfo(this.state.name)
      .then(this.onDataLoaded)
      .catch(this.onError);
  }

  onDataLoaded = (data) => {
    this.setState({
      data,
      loaded: true,
      error: false
    });
  }

  onError = () => {
    this.setState({
      error: true
    });
  }
  
  render() {
    const { name, error } = this.state;
    
    return (
      <div className="wrapper">
        <main className="page">
          <div className="page__container _container">

            <div className="page__gender gender">
              <h1 className="gender__title">Find out gender by name</h1>

              <Form
                name={name}
                error={error}
                onChangeName={this.onChangeName}
                onRequest={this.onRequest}
              />

              <Info {...this.state} />

            </div>

          </div>
        </main>
      </div>
    )
  }
}

export default App;